import React from "react";
import product from "../../images/product.png";
import styled from "styled-components";
import Button from "../Misc/Button";

export default function Hero() {
  return (
    <ContainerWrap>
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

          <Button 
            content="Start now" 
            color="white" 
            background="black" />
            
          <Button
            content="Contact sales"
            color="black"
            background="transparent"
          />
          
        </TextWrapper>
        <ImgWrap src={product} alt="product" />
      </Container>
    </ContainerWrap>
  );
}

// styles

const TextWrapper = styled.div`
  padding-top: 100px;
  max-width: 60%;
  @media (max-width: 599px) {
    max-width: 100%;
  }
`;

const H1 = styled.h1`
  font-size: 5.5rem;
  mix-blend-mode: color-burn;
  letter-spacing: -0.03em;
  line-height: 1.04;
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
  @media (max-width: 599px) {
    margin-bottom: 80px;
  }
`;

const ContainerWrap = styled.div`
  margin: 0 16px;
`;
