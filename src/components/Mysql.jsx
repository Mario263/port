import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Ser from "./Ser";
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

const Mysql = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Ser />
        </Stage>
        <OrbitControls enableZoom={true} autoRotate />
      </Canvas>
      <Desc>
        Started learning it back in 11th grade, one of the best things to work upon  database and store em on servers
        
      </Desc>
    </>
  );
};

export default Mysql;
