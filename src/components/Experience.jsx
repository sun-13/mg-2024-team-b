import { useState } from "react";
import { Environment, useTexture } from "@react-three/drei";
import { Sun } from "./avatar/Sun";
import { Yasushi } from "./avatar/Yasushi";
import { Yato } from "./avatar/Yato";
import { Minhyok } from "./avatar/Minhyok";
import { useThree } from "@react-three/fiber";

export const Experience = (props) => {
  const { personProps } = props;
  const texture = useTexture("textures/background.jpg");
  const viewport = useThree((state) => state.viewport);
  const personScale = 2;

  return (
    <>
      <Sun
        {...personProps.sun}
      />
      <Yasushi
        {...personProps.yasushi}
      />
      <Yato
        {...personProps.yato}
      />
      <Minhyok
        {...personProps.minhyok}
      />
      <Environment preset="sunset" />
      {/* <mesh position={[0, 1, 0]}>
        <planeGeometry args={[viewport.width * 1.2, viewport.height * 1.2]}
        />
        <meshBasicMaterial map={texture} />
      </mesh> */}
    </>
  );
};
