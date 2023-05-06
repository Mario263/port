import React from "react";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Stage } from '@react-three/drei'
// import Drone from "./Drone"
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
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

const Fpv = () => {
  return (
    <>
      <Canvas>
        {/* <Stage environment="city" intensity={0.6}>
      <Drone />
    </Stage>
    <OrbitControls enableZoom={false} /> */}
      </Canvas>
      <Desc>
        In a world where gravity has become optional, i am a brilliant
        engineer who specializes in building FPV (First Person View) drones for
        the adventurous.
      </Desc>
    </>
  );
};

export default Fpv;
