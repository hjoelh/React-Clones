import React from "react";
import styled from "styled-components";

export default function BackgroundGrid() {
  return (
    <Wrapper>
      <Container>
        <Column />
        <Column />
        <Column />
        <Column />
      </Container>
    </Wrapper>
  );
}

//styles

const Wrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1080px;
  height: 100%;
  width: 100%;
  margin: 0 16px;
`;

const Column = styled.div`
  width: 25%;
  border: 1px dashed hsla(236, 3%, 78%, 0.1);
  border-collapse: collapse;
`;
