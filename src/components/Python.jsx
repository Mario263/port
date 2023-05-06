import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Py from "./Py";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 200px;
  right: 100px;
  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
  }
`;

const Python = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Py />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <Desc>
        This is my goto language, mostly used for projects, don't use it much for competative coding!
      </Desc>
    </>
  );
};

export default Python;
