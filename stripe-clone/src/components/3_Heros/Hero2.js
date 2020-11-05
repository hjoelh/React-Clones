import React from "react";
import calc from "../../images/calc.png";
import cc from "../../images/cc.png";
import dashboard from "../../images/dashboard.png";
import entry from "../../images/entry.png";
import phone from "../../images/phone.png";
import styled from "styled-components";
import Button from "../Misc/Button";

export default function Hero2() {
  return (
    <Background>
      <ContainerWrap>
        <Container>
          <Text>
            <span>Unified platform</span>
          </Text>
          <H2>A fully integrated suite of payments products</H2>
          <TextWrap>
            <Text>
              We bring together everything that’s required to build websites and
              apps that accept payments and send payouts globally. Stripe’s
              products power payments for{" "}
              <span>
                {" "}
                online and in-person retailers, subscriptions businesses,
                software platforms and marketplaces,{" "}
              </span>{" "}
              and everything in between.
            </Text>
            <Text alt>
              We also help companies{" "}
              <span>
                {" "}
                beat fraud, send invoices, issue virtual and physical cards, get
                financing, manage business spend,{" "}
              </span>{" "}
              and much more.
            </Text>
          </TextWrap>

          <Button 
            content="Start with payments" 
            color="white" 
            background="#635bff" />

          <ImgWrap>
            <Img1 src={cc} alt="Credit Card" />
            <Img2 src={entry} alt="Pay Invoice" />
            <Img3 src={phone} alt="Apple Pay Checkout" />
            <Img4 src={dashboard} alt="Product Dashboard" />
            <Img5 src={calc} alt="Terminal" />
          </ImgWrap>
        </Container>
      </ContainerWrap>
    </Background>
  );
}

// styles

const Text = styled.p`
  padding: ${(props) => (props.alt ? "35px 16px" : "35px 0px")};
  line-height: 28px;
  letter-spacing: 0.5px;
  font-size: 1.1rem;
  font-weight: 400;
  color: #425466;
  width: 80%;
  span {
    color: #635bff;
    font-weight: 500;
    transition: 0.2s;
    &:hover {
      color: black;
    }
  }
  @media (max-width: 599px) {
    padding: 15px 0px;
  }
`;


const H2 = styled.h2`
  font-size: 2.1rem;
  font-weight: 500;
  letter-spacing: -0.1px;
  width: 50%;
  @media (max-width: 850px) {
    width: 100%;
    padding-bottom: 20px;
  }
`;

const ImgWrap = styled.div`
  margin: 50px 0;
  position: relative;
  max-width: 100%;
  height: 100px;
  display: flex;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  p {
    padding-right: 90px;
    width: 50%;

    @media (max-width: 599px) {
      width: 100%;
      padding-right: 0px;
    }
  }
  @media (max-width: 599px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 700px;
  background-color: transparent;
  padding: 25px 16px;
`;

const ContainerWrap = styled.div`
  margin: 0 16px;
`;

const Background = styled.div`
  width: 100%;
  background-color: #f6f9fc;
  position: relative;
`;


//images

const Img1 = styled.img`
  position: absolute;
  height: 200px;
  left: 0px;
  top: 0px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  @media (max-width: 900px) {
    height: ${200 * 0.78}px;
  }
`;

const Img2 = styled.img`
  height: 400px;
  position: absolute;
  left: 360px;
  top: 0px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  @media (max-width: 900px) {
    height: 281px;
    left: ${360 * 0.78}px;
  }
`;
const Img3 = styled.img`
  height: 660px;
  position: absolute;
  left: 75px;
  top: 225px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  @media (max-width: 900px) {
    left: 0px;
    height: 517;
    top: 185px;
  }
`;

const Img4 = styled.img`
  height: 500px;
  position: absolute;
  left: 400px;
  top: 430px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  @media (max-width: 900px) {
    height: ${400 * 0.78}px;
    left: ${360 * 0.78}px;
    top: 310px;
  }
`;

const Img5 = styled.img`
  height: 525px;
  position: absolute;
  left: 1000px;
  top: -95px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  @media (max-width: 900px) {
    height: 377px;
    left: 695px;
  }
`;
