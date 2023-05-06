import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Open from "./Open";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 140px;
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

const Cv = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Open />
        </Stage>
        <OrbitControls enableZoom={true} autoRotate />
      </Canvas>
      <Desc>
        In a world where everyday objects have a mind of their own, you find
        yourself in possession of a magical camera powered by OpenCV. This
        extraordinary device reveals the true personalities and secret lives of
        inanimate objects.
      </Desc>
    </>
  );
};

export default Cv;
