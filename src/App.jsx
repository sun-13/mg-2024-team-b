import { useState, useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Experience } from './components/Experience';
import { Loader, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { presentation, slideShow } from './presentation';
import TWEEN from '@tweenjs/tween.js';
import { ReactSVG } from 'react-svg'

function Tween() {
  useFrame(() => {
    TWEEN.update();
  })
}
const persons = ["sun", "yasushi", "yato", "minhyuk"];
const cameraTransitionDuration = 1000;
let currentAudio = null;

// default settings
const personPositionY = -3.2;
const personPositionZ = 2;
const initialPersonProps = {
  sun: {
    position: [-2.4, personPositionY, personPositionZ],
    animation: "IdleLookHand",
    isSpeaking: false,
  },
  yasushi: {
    position: [-0.8, personPositionY, personPositionZ],
    animation: "Happy",
    isSpeaking: false,
  },
  yato: {
    position: [0.8, personPositionY, personPositionZ],
    animation: "Idle",
    isSpeaking: false,
  },
  minhyuk: {
    position: [2.4, personPositionY, personPositionZ],
    animation: "IdleHappy",
    isSpeaking: false,
  },
};
const defaultCameraPosition = {
  x: -2,
  y: 2,
  z: 15,
};
const defaultCameraLookAt = {
  x: -2,
  y: 2,
  z: 0,
};

function App() {

  // state
  const [audio, setAudio] = useState(null);
  const [lipData, setLipData] = useState(null);
  const [personProps, setPersonProps] = useState(initialPersonProps);
  const [currentPresentationIndex, setCurrentPresentationIndex] = useState(0);
  const [isPlayingPresentation, setIsPlayingPresentation] = useState(false);
  const [speechTextArray, setSpeechTextArray] = useState([]);

  // slide show
  const [currentSlideShowIndex, setCurrentSlideShowIndex] = useState(0);
  const slideShowImage = useMemo(() => slideShow[currentSlideShowIndex].image, [currentSlideShowIndex]);

  // ref
  const camera = useRef(null);
  const controls = useRef(null);

  const resetCamera = () => {
    if (!controls.current || !camera.current) {
      return;
    }
    new TWEEN.Tween(controls.current.target)
      .to(defaultCameraLookAt, cameraTransitionDuration)
      .easing(TWEEN.Easing.Cubic.Out)
      .start();
    new TWEEN.Tween(camera.current.position)
      .to(defaultCameraPosition, cameraTransitionDuration)
      .easing(TWEEN.Easing.Cubic.Out)
      .start();
  };

  const play = async () => {
    if (isPlayingPresentation || currentPresentationIndex >= presentation.length) {
      return;
    }
    setIsPlayingPresentation(true);

    const data = presentation[currentPresentationIndex];

    // fetch data
    let lipData = null;
    if (data.lip) {
      await fetch(data.lip).then((response) => response.json()).then((json) => {
        lipData = json;
      });
    }
    let audioData = null;
    if (data.audio) {
      await fetch(data.audio).then((response) => response.blob()).then((blob) => {
        audioData = URL.createObjectURL(blob);
      });
    }

    // Person animation
    const newPersonProps = structuredClone(initialPersonProps);
    if (data.personProps) {
      for (const person of persons) {
        if (!data.personProps[person]) {
          continue;
        }
        newPersonProps[person] = {
          ...newPersonProps[person],
          ...data.personProps[person],
        };
      }
    }
    setPersonProps(newPersonProps);


    // Change camera position
    if (data.camera) {
      new TWEEN.Tween(controls.current.target)
        .to(data.camera.lookAt, cameraTransitionDuration)
        .easing(TWEEN.Easing.Cubic.Out)
        .start();
      new TWEEN.Tween(camera.current.position)
        .to(data.camera.position, cameraTransitionDuration)
        .easing(TWEEN.Easing.Cubic.Out)
        .start();
    } else {
      resetCamera();
    };

    if (lipData) {
      setLipData(lipData);
    } else {
      setLipData(null);
    }

    // Play Audio
    if (audioData) {
      if (currentAudio) {
        currentAudio.pause();
      }
      currentAudio = new Audio(audioData);
      currentAudio.addEventListener("ended", () => {
        stop();
      });
      currentAudio.play();
      setAudio(currentAudio);
    } else {
      setCurrentPresentationIndex(currentPresentationIndex >= presentation.length - 1 ? 0 : currentPresentationIndex + 1);
      setIsPlayingPresentation(false);
    }

    // set speech text
    if (data.text) {
      const newSpeechArray = structuredClone(speechTextArray);
      newSpeechArray.unshift({
        id: Date.now(),
        text: data.text
      });
      setSpeechTextArray(newSpeechArray);
    }
  }

  const stop = () => {
    if (currentAudio) {
      currentAudio.pause();
    }
    setPersonProps(initialPersonProps);
    setCurrentPresentationIndex(currentPresentationIndex >= presentation.length - 1 ? 0 : currentPresentationIndex + 1);
    setIsPlayingPresentation(false);
    setLipData(null);
    setAudio(null);
  }

  return (
    <>
      <Canvas shadows>
        {/* <color attach="background" args={["#f00"]} /> */}
        <directionalLight
          intensity={1}
          castShadow={true}
          shadow-bias={-0.0002}
          shadow-mapSize={[2048, 2048]}
          position={[85.0, 80.0, 70.0]}
          shadow-camera-left={-30}
          shadow-camera-right={30}
          shadow-camera-top={30}
          shadow-camera-bottom={-30}
        />
        <ambientLight intensity={0.2} />
        <PerspectiveCamera
          ref={camera}
          makeDefault
          position={[
            defaultCameraPosition.x,
            defaultCameraPosition.y,
            defaultCameraPosition.z]}
          fov={60}

        />
        <OrbitControls ref={controls} />
        <Experience
          personProps={personProps}
          controls={controls}
          lipData={lipData}
          audio={audio}
          slideShowImage={slideShowImage}
        />
        <Tween />
      </Canvas>
      <div className="ui-box">
        <hr className="hr" />
        <div className="project-title">
          <p className="project-name">Meet & Greet</p>
          <h1>Team B</h1>
          <ul className="members-list">
            <li>sun_xuan</li>
            <li>kimura_yasushi</li>
            <li>yato_chiko</li>
            <li>bae_minhyuk</li>
          </ul>
        </div>
        <hr className="hr" />
        <h5>Slide Show</h5>
        <div className="control-area">
          <button
            type="button"
            className="icon-button green"
          >
            <ReactSVG src="/icons/arrowshape-left.svg" />
          </button>
          <select
            className="select flex-1"
            name="currentSlideShowIndex"
            id="currentSlideShowIndex">
            <option value="0">Slide 1</option>
            <option value="1">Slide 2</option>
            <option value="2">Slide 3</option>
          </select>
          <button
            type="button"
            className="icon-button green"
          >
            <ReactSVG src="/icons/arrowshape-right.svg" />
          </button>
        </div>
        <hr className="hr" />
        <h5>Talk Script</h5>
        <div className="control-area">
          <button
            type="button"
            className="icon-button green"
            onClick={resetCamera}
          >
            <ReactSVG src="/icons/camera-reset.svg" />
          </button>
          <select
            className="select index-select flex-1"
            name="currentPrensentationIndex"
            id="currentPrensentationIndex"
            value={currentPresentationIndex >= presentation.length ? 0 : currentPresentationIndex}
            onChange={(e) => setCurrentPresentationIndex(Number(e.target.value))}
            style={{width: "10px"}}
          >
            {presentation.map((data, index) => (
              <option key={data.id} value={index}>{data.title}</option>
            ))}
          </select>
          {!isPlayingPresentation && <button
            type="button"
            className="icon-button green"
            onClick={play}
            disabled={isPlayingPresentation || currentPresentationIndex >= presentation.length}
          >
            <ReactSVG src="/icons/play.svg" />
          </button>}
          {isPlayingPresentation && <button
            type="button"
            className="icon-button red"
            onClick={stop}
            disabled={!isPlayingPresentation}
          >
            <ReactSVG src="/icons/stop.svg" />
          </button>}
        </div>
        {speechTextArray?.length > 0 &&
        <div className="speech-area">
          {speechTextArray.map((o, index) => (
          <div key={o.id} className="speech-bubble">
              <p dangerouslySetInnerHTML={{__html: o.text}} />
          </div>
          ))}
        </div>}

      </div>
      <Loader />
    </>
  );
}

export default App;
