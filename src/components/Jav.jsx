import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Java from "./Java";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 150px;
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

const Jav = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Java />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>
        You wake up one morning to find that your entire Java codebase has
        transformed into a sentient being! This quirky creature, known as
        'Javatron,' insists on being your coding partner and claims to possess
        incredible programming skills. JK learnt it but now i don't remember anything regarding it
      </Desc>
    </>
  );
};

export default Jav;
