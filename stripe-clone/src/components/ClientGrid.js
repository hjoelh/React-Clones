import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  pointer-events: none;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1080px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
`;

const Column = styled.div`
  width: 25%;
  border: 0.5px dashed hsla(236, 3%, 78%, 0.2);
  border-collapse: collapse;
`;

export default function Grid() {
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
};


