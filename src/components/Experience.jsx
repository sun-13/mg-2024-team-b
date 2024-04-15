import { useEffect, useState, useRef } from "react";
import { Environment, useTexture } from "@react-three/drei";
import { Sun } from "./avatar/Sun";
import { Yasushi } from "./avatar/Yasushi";
import { Yato } from "./avatar/Yato";
import { Minhyuk } from "./avatar/Minhyuk";
import { useThree } from "@react-three/fiber";
import { FadingImage } from "./FadingImage";

export const Experience = (props) => {
  const { personProps, audio, lipData, slideShowImage } = props;
  const viewport = useThree((state) => state.viewport);
  const [image1, setImage1] = useState('slides/cover.png');
  const [image2, setImage2] = useState('slides/cover.png');

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setImage1(image2);
    setImage2(slideShowImage);
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
      <FadingImage
        position={[0, 3, 0.1]}
        image1={image1}
        image2={image2} />
    </>
  );
};
