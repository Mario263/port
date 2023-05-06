import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Rick from "./Rick";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 410px;
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

const Data = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Rick />
        </Stage>
        <OrbitControls enableZoom={true} />
      </Canvas>
      <Desc>
        Congratulations, esteemed Data Scientist! You've just been transported
        to a whimsical world where data has taken on a life of its own. As you
        step into this magical realm, you notice that numbers are dancing,
        charts are singing, and algorithms are mischievously playing
        hide-and-seek. Your mission, should you choose to accept it, is to tame
        this data-driven wonderland by creating a harmonious symphony of
        insights. With your analytical prowess and a sprinkle of imagination,
        unlock the secrets of this enchanting world and bring order to the
        chaos. Are you ready to embark on this extraordinary adventure and prove
        that data is not just numbers, but a delightful universe waiting to be
        explored?
      </Desc>
    </>
  );
};

export default Data;
