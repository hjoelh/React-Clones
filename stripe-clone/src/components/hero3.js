import React from "react";
import { BsFillTerminalFill } from "react-icons/bs";
import { RiCheckboxMultipleLine } from "react-icons/ri";

import code from "../images/code.png";
import styled from "styled-components";

export default function Hero3() {
  return (
    <Background>
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

          <Button>
            Read the docs{" "}
            <Arrow width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
              <path d="M0 5h7"></path>
              <path d="M1 1l4 4-4 4"></path>
            </Arrow>
          </Button>

          <TextBoxContainer>
            <TextBox>
              <BsFillTerminalFill />
              <TextSmall title>Tools for every stack</TextSmall>
              <TextSmall>
                We offer client and server libraries in everything from React
                and PHP to .NET and iOS.
              </TextSmall>
              <TextSmall>
                {" "}
                <ButtonCard>
                  See libraries
                  <Arrow
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    aria-hidden="true"
                  >
                    <path d="M0 5h7"></path>
                    <path d="M1 1l4 4-4 4"></path>
                  </Arrow>
                </ButtonCard>
              </TextSmall>
            </TextBox>
            <TextBox>
              <RiCheckboxMultipleLine />
              <TextSmall title>Prebuilt integrations</TextSmall>
              <TextSmall>
                Use integrations for systems like Shopify, WooCommerce,
                NetSuite, and more.
              </TextSmall>
              <TextSmall>
                {" "}
                <ButtonCard>
                  Explore patners
                  <Arrow
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    aria-hidden="true"
                  >
                    <path d="M0 5h7"></path>
                    <path d="M1 1l4 4-4 4"></path>
                  </Arrow>
                </ButtonCard>
              </TextSmall>
            </TextBox>
          </TextBoxContainer>

          </HeroText>

<HeroText2>

          <Img src={code} alt="code" />
          
          </HeroText2>
       
      </Container>
    </Background>
  );
}

//styles

const Button = styled.button`
  color: black;
  border: none;
  border-radius: 25px;
  padding: 8px 14px;
  font-size: 0.95rem;
  cursor: pointer;
  text-align: center;
  background-color: #00d4ff;
  transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  &:hover {
    background-color: white;
  }
`;

const ButtonCard = styled(Button)`
  padding: 0px;
  border-radius: 0px;
  background-color: transparent;
  color: #00d4ff;
  &:hover {
    color: white;
    background-color: transparent;
  }
`;

const H2 = styled.h2`
  margin: 25px 0;
  font-size: 2.3rem;
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
  padding: 320px 16px;
  max-width: 1080px;
  margin: 0 auto;
  position: relative;
  color: #00d4ff;
  display: flex;
  flex-direction: row;
`;

const Background = styled.div`
  width: 100%;
  background-color: #0a2540;
  clip-path: polygon(100% 0, 100% 85%, 0 100%, 0 15%);

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
