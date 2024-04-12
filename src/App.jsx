import { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Loader, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { presentation } from "./presentation";
import TWEEN from '@tweenjs/tween.js'

function Tween() {
  useFrame(() => {
    TWEEN.update()
  })
}
const persons = ["sun", "yasushi", "yato", "minhyuk"];
const cameraTransitionDuration = 1000;
let currentAudio = null;

function App() {

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
    x: 0,
    y: 0,
    z: 10,
  };
  const defaultCameraLookAt = {
    x: 0,
    y: 0,
    z: 0,
  };

  // state
  const [audio, setAudio] = useState(null);
  const [lipData, setLipData] = useState(null);
  const [personProps, setPersonProps] = useState(initialPersonProps);
  const [currentPresentationIndex, setCurrentPresentationIndex] = useState(0);
  const [isPlayingPresentation, setIsPlayingPresentation] = useState(false);
  const [speechText, setSpeechText] = useState('');

  // ref
  const camera = useRef(null);
  const controls = useRef(null);

  const resetCamera = () => {
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
    setSpeechText(data.text || '');
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
    setSpeechText('');
  }

  return (
    <>
      <Canvas shadows>
        {/* <color attach="background" args={["#f00"]} /> */}
        <PerspectiveCamera
          ref={camera}
          makeDefault
          position={[defaultCameraPosition.x, defaultCameraPosition.y, defaultCameraPosition.z]}
        />
        <OrbitControls ref={controls} />
        <Experience
          personProps={personProps}
          controls={controls}
          lipData={lipData}
          audio={audio}
        />
        <Tween />
      </Canvas>
      <div className="ui-box">
        <hr className="hr" />
        <div className="project-title">
          <p>Meet & Greet</p>
          <h1>Team B</h1>
          <ul className="members-list">
            <li>sun_xuan</li>
            <li>kimura_yasushi</li>
            <li>yato_chiko</li>
            <li>bae_minhyuk</li>
          </ul>
        </div>
        <hr className="hr" />
        <div className="control-area">
          <select
            className="select index-select"
            name="currentPrensentationIndex"
            id="currentPrensentationIndex"
            value={currentPresentationIndex >= presentation.length ? 0 : currentPresentationIndex}
            onChange={(e) => setCurrentPresentationIndex(Number(e.target.value))}
          >
            {presentation.map((data, index) => (
              <option key={data.id} value={index}>{data.title}</option>
            ))}
          </select>
          {!isPlayingPresentation && <button
            type="button"
            className="icon-button play-button"
            onClick={play}
            disabled={isPlayingPresentation || currentPresentationIndex >= presentation.length}
          >
            <img src="/icons/play.svg" alt="Play" />
          </button>}
          {isPlayingPresentation && <button
            type="button"
            className="icon-button stop-button"
            onClick={stop}
            disabled={!isPlayingPresentation}
          >
            <img src="/icons/stop.svg" alt="Stop" />
          </button>}
        </div>
        {speechText &&
        <div className="speech-area">
          <div className="speech-bubble">
            <p>{speechText}</p>
          </div>
        </div>}

      </div>
      <Loader />
    </>
  );
}

export default App;
