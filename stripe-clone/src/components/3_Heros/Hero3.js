import React from "react";
import { BsFillTerminalFill } from "react-icons/bs";
import { RiCheckboxMultipleLine } from "react-icons/ri";

import code from "../../images/code.png";
import styled from "styled-components";
import Button from "../Misc/Button";

export default function Hero3() {
  return (
    <BackgroundWrap>
      <Background />
      <ContainerWrap>
        <Container>
          <HeroText>
            <Text>
              <span>Designed for developers</span>
            </Text>

            <H2>The world’s most powerful and easy-to-use APIs</H2>

            <Text>
              We agonize over the right abstractions so your teams don’t need to
              stitch together disparate systems or spend months integrating
              payments functionality.
            </Text>

            <Button 
            content="Read the docs" 
            color="black" 
            background="#00d4ff" />

            <TextBoxContainer>
              <TextBox>
                <BsFillTerminalFill />
                <TextSmall title>
                  <LineBorder />
                  Tools for every stack
                </TextSmall>
                <TextSmall>
                  We offer client and server libraries in everything from React
                  and PHP to .NET and iOS.
                </TextSmall>
                <TextSmall>
                  {" "}


                  <Button alt
            content="See libraries" 
            color="#00d4ff" 
            background="transparent" />


                </TextSmall>
              </TextBox>
              <TextBox>
                <RiCheckboxMultipleLine />
                <TextSmall title>
                  <LineBorder />
                  Prebuilt integrations
                </TextSmall>
                <TextSmall>
                  Use integrations for systems like Shopify, WooCommerce,
                  NetSuite, and more.
                </TextSmall>
                <TextSmall>
                  {" "}
                 
                  <Button alt 
            content="Explore partners" 
            color="#00d4ff" 
            background="transparent" />
                </TextSmall>
              </TextBox>
            </TextBoxContainer>
          </HeroText>

          <HeroText2>
            <Img src={code} alt="code" />
          </HeroText2>
        </Container>
      </ContainerWrap>
    </BackgroundWrap>
  );
}

//styles



const H2 = styled.h2`
  margin: 25px 0;
  font-size: 2.1rem;
  letter-spacing: -0.1px;
  font-weight: 500;
  color: white;
  width: 90%;
  @media (max-width: 599px) {
    width: 100%;
  }
`;

const Text = styled.p`
  margin: 25px 0;
  line-height: 29px;
  letter-spacing: 0.5px;
  font-size: 1.1rem;
  color: #adbdcc;
  width: 90%;
  span {
    color: #00d4ff;
    font-weight: 500;
  }
`;

const TextSmall = styled.p`
  color: ${(props) => (props.title ? "white" : "#adbdcc")};
  padding: 4px 0;
  font-size: 1rem;
  line-height: 160%;
  position: relative;
  font-weight: ${(props) => (props.title ? "900" : "normal")};
  span {
    color: #00d4ff;
  }
`;

const TextBox = styled.div`
  width: 50%;
  padding-right: 2em;
`;

const TextBoxContainer = styled.div`
  margin: 50px 0;
  width: 100%;
  display: flex;
`;

const HeroText = styled.div`
  width: 50%;
  position: relative;
  @media (max-width: 599px) {
    width: 100%;
  }
`;

const HeroText2 = styled.div`
  width: 50%;
  position: relative;
  @media (max-width: 599px) {
    display: none;
  }
`;

const Img = styled.img`
  position: absolute;
  left: 0px;
`;

const Container = styled.div`
  padding: 160px 16px;
  max-width: 1080px;
  margin: 0 auto;
  margin-top: -150px;
  position: relative;
  color: #00d4ff;
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    margin-top: -375px;
    padding: 110px 16px;
  }
`;

const ContainerWrap = styled.div`
  margin: 0 16px;
  position: relative;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #0a2540;
  transform: skewY(-6deg);
`;



const LineBorder = styled.div`
  position: absolute;
  border-left: 0.5px solid #00d4ff;
  top: 10px;
  left: -16px;
  height: 40%;
`;
const BackgroundWrap = styled.div`
  position: relative;
`;
