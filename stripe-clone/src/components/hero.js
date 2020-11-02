import React from "react";
import product from "../images/product.png";
import styled from "styled-components";

export default function Hero() {
  return (
    <Container>
      <TextWrapper>
        <H1>
          Payments infrastructure <br /> for the internet
        </H1>
        <Text>
          Millions of businesses of all sizes—from startups to large
          enterprises—use Stripe’s software and APIs to accept payments, send
          payouts, and manage their businesses online.
        </Text>
        <Button>Start now        <Arrow
     width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
      <path d="M0 5h7"></path>
      <path d="M1 1l4 4-4 4"></path>
    </Arrow>

        </Button>
        <Button alt>Contact sales 
        <Arrow
     width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
      <path d="M0 5h7"></path>
      <path d="M1 1l4 4-4 4"></path>
    </Arrow>
</Button>
      </TextWrapper>
      <ImgWrap src={product} alt="product" />
    </Container>
  );
}

// styles

const Button = styled.button`
  color: ${(props) => (props.alt ? "black" : "white")};
  border: none;
  border-radius: 25px;
  padding: 8px 14px;
  font-size: 0.95rem;
  cursor: pointer;
  opacity: 1;
  text-align: center;
  background-color: ${(props) => (props.alt ? "white" : "black")};
  transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
   &:hover {
     opacity: 0.6;
   }
`;

const TextWrapper = styled.div`
  padding-top: 7em;
  max-width: 60%;
  @media (max-width: 599px) {
    max-width: 100%;
  }
`;

const H1 = styled.h1`
  font-size: 5.5rem;
  mix-blend-mode: color-burn;
  letter-spacing: -2px;
  line-height: 1em;
  color: #3a3a3a;
  @media (max-width: 1024px) {
    font-size: 8vw;
  }
  @media (max-width: 599px) {
    font-size: 12vw;
  }
  
  
`;

const Text = styled.p`
  padding: 35px 0;
  line-height: 29px;
  letter-spacing: 0.5px;
  font-size: 1.1rem;
  color: #425466;
  width: 80%;
  @media (max-width: 1000px) {
    padding-top: 19%;
  }
  @media (max-width: 599px) {
    width: 100%;
    padding-top: 7%;
  }

`;

const ImgWrap = styled.img`
  position: absolute;
  height: 620px;
  left: 62%;
  top: 25px;
  @media (max-width: 599px) {
    display: none;
  }
`;

const Container = styled.div`
  max-width: 1080px;
  background-color: transparent;
  margin: 0 auto;
  position: relative;
  margin-bottom: 150px;
  position: relative;
  padding: 0 16px;
`;

const Arrow = styled.svg`
  position: relative;
  top: 1px;
  margin-left: 8px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  path:first-child {
    opacity: 0;
  }
  path:nth-child(2) {
    transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  ${Button}:hover & {
    path:first-child {
      opacity: 1;
    }
    path:nth-child(2) {
      transform: translateX(3px);
    }
  }
`;