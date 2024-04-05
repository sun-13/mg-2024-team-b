import { useState, useRef } from "react";
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
const persons = ["sun", "yasushi", "yato", "minhyok"];
const cameraTransitionDuration = 1000;

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
    minhyok: {
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

  // ref
  const camera = useRef(null);
  const controls = useRef(null);
  const audioRef = useRef(null);
  audioRef.current?.addEventListener("ended", () => {
    stop();
  });

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
      // Reset camera position
      new TWEEN.Tween(controls.current.target)
        .to(defaultCameraLookAt, cameraTransitionDuration)
        .easing(TWEEN.Easing.Cubic.Out)
        .start();
      new TWEEN.Tween(camera.current.position)
        .to(defaultCameraPosition, cameraTransitionDuration)
        .easing(TWEEN.Easing.Cubic.Out)
        .start();
    };

    /**
     * TODO:
     * Lip Sync データを適用する
     */
    if (lipData) {
      setLipData(lipData);
      console.log(lipData);
    };

    // Play Audio
    if (audioData) {
      const currentAudio = new Audio(audioData);
      currentAudio.addEventListener("ended", () => {
        stop();
      });
      currentAudio.play();
      setAudio(currentAudio);
    } else {
      setCurrentPresentationIndex(currentPresentationIndex >= presentation.length - 1 ? 0 : currentPresentationIndex + 1);
      setIsPlayingPresentation(false);
    }
  }

  const stop = () => {
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
        <select
          className="index-select"
          name="currentPrensentationIndex"
          id="currentPrensentationIndex"
          value={currentPresentationIndex >= presentation.length ? 0 : currentPresentationIndex}
          onChange={(e) => setCurrentPresentationIndex(Number(e.target.value))}
        >
          {presentation.map((data, index) => (
            <option key={data.id} value={index}>{data.title}</option>
          ))}
        </select>
        <button
          type="button"
          className="play-button"
          onClick={play}
          disabled={isPlayingPresentation || currentPresentationIndex >= presentation.length}
        >Play</button>
      </div>
      <Loader />
    </>
  );
}

export default App;
