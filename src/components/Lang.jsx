import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import C from "./C";
import styled from "styled-components";

const Desc = styled.div`
  width: 100px;
  height: 117px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 70px;
  right: 70px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
  }
`;

const Lang = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <C />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <Desc>
        C/C++ was the first language i started learning, still trying to be good at it, source of motivation is "Let us C"
      </Desc>
    </>
  );
};

export default Lang;
