import { useEffect, useState, useRef } from "react";
import { Environment, useTexture } from "@react-three/drei";
import { Sun } from "./avatar/Sun";
import { Yasushi } from "./avatar/Yasushi";
import { Yato } from "./avatar/Yato";
import { Minhyuk } from "./avatar/Minhyuk";
import { useThree } from "@react-three/fiber";
import { TextureLoader, MeshBasicMaterial, sRGBEncoding, DoubleSide } from "three";

const textureLoader = new TextureLoader();
const defaultSlide = 'slides/cover.png';

export const Experience = (props) => {
  const { personProps, audio, lipData, slideShowImage } = props;
  const defaultSlideTexture = useTexture(defaultSlide);
  const viewport = useThree((state) => state.viewport);
  const slideRef = useRef();

  useEffect(() => {
    const url = slideShowImage || defaultSlide;
    textureLoader.load(url, (t) => {
      t.encoding = sRGBEncoding;
      const material = new MeshBasicMaterial({ map: t });
      material.side = DoubleSide;
      slideRef.current.material = material;
      slideRef.current.needsUpdate = true;
    });
  }
  , [slideShowImage]);

  return (
    <>
      <Sun
        {...personProps.sun}
        audio={audio}
        lipData={lipData} />
      <Yasushi
        {...personProps.yasushi}
        audio={audio}
        lipData={lipData} />
      <Yato
        {...personProps.yato}
        audio={audio}
        lipData={lipData} />
      <Minhyuk
        {...personProps.minhyuk}
        audio={audio}
        lipData={lipData} />
      <Environment preset="sunset" />
      <mesh ref={slideRef} position={[0, 3, 0]}>
        <planeGeometry args={[1920 / 150, 1080 / 150]} />
        <meshBasicMaterial map={defaultSlideTexture} />
      </mesh>
    </>
  );
};
