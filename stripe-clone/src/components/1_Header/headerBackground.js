import React from "react";
import styled, { keyframes } from "styled-components";

export default function HeaderBackground() {
  return <Rainbow></Rainbow>;
}

// styles

const animation = keyframes`
0% {background-position: 0% 88%;}
50% {background-position: 100% 13%;}
100% {background-position: 0% 88%;}
`;

const Rainbow = styled.div`
  position: absolute;
  background: linear-gradient(90deg, #00b7ff 0%, #ff5e00 50%, #9000ff 100%);
  background-size: 150% 150%;
  top: -325px;
  width: 100vw;
  height: 650px;
  left: 0px;
  transform: skewY(-10deg) ;
  z-index: -1;
  pointer-events: none;
  animation: ${animation} 10s ease infinite;
  @media (max-width: 800px) {
    height: 600px;
  }
`;


