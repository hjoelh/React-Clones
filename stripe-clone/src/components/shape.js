import React from "react";
import styled, { keyframes } from "styled-components";

export default function Shape() {
  return <Rainbow></Rainbow>;
}

// styles

// const animation = keyframes`
// 0% {background-position: 0% 88%;}
// 50% {background-position: 100% 13%;}
// 100% {background-position: 0% 88%;}
// `;

const Rainbow = styled.div`
  position: absolute;
  top: -25px;
  background: linear-gradient(90deg, #00b7ff 0%, #ff5e00 50%, #9000ff 100%);
  background-size: 150% 150%;
  width: 100vw;
  height: 1000px;
  left: 0;
  /* https://bennettfeely.com/clippy/ */
  clip-path: polygon(0 1%, 100% 0%, 100% 27%, 0 49.5%);
  z-index: -1;
  pointer-events: none;
`;

  /* animation: ${animation} 10s ease infinite; */

