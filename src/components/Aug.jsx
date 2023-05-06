import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Arvr from "./Arvr";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 130px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;
  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
  }
`;

const Aug = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Arvr />
        </Stage>
        <OrbitControls enableZoom={true} autoRotate />
      </Canvas>
      <Desc>
        You are a talented developer specializing in augmented and virtual
        reality applications. One day, while working on your latest project, you
        stumble upon a mysterious bug that causes your AR/VR creations to escape
        into the real world. This is an example of it!
      </Desc>
    </>
  );
};

export default Aug;
