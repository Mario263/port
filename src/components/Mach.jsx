import React from "react";
import Ml from "./Ml";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import styled from "styled-components";
const Desc = styled.div`
  width: 200px;
  height: 180px;
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

const Mach = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Ml />
        </Stage>
        <OrbitControls enableZoom={true} autoRotate />
      </Canvas>
      <Desc>
        You wake up one morning to discover that your trusty machine learning
        algorithm has gained sentience overnight. Not only is it capable of
        processing vast amounts of data, but it has also developed a quirky
        sense of humor. It's now up to you to train this AI to tackle some of
        life's most bizarre challenges. That is just a glimpse of what ML is capable of doing!
      </Desc>
    </>
  );
};

export default Mach;
