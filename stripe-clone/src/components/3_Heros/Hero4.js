import React from "react";
import styled from "styled-components";
import {FaAtom, FaAngleDoubleRight, FaIcicles, FaLock} from 'react-icons/fa'

export default function Hero4() {
  return (
    <ContainerWrap> 
      <Container>
        <HeroText>
          <Text>
            <span>Why Stripe</span>
          </Text>

          <H2>A technology-first approach to payments and finance</H2>

  
          </HeroText>


          <TextBoxContainer>

            <TextBox>
              <IconWrapper>
                <FaAtom/>
              </IconWrapper>

                <TextSmall title>Close to the metal
                <LineBorder />
                </TextSmall>
              <TextSmall>
              From <span>direct integrations</span> with card networks and banks to checkout flows in the browser, we operate on and optimize at every level of the financial stack.
              </TextSmall>
            </TextBox>

        
            <TextBox>
            <IconWrapper>
            <FaAngleDoubleRight/>
            </IconWrapper>
              <TextSmall title>Fastest-improving platform  <LineBorder /></TextSmall>
              <TextSmall>
              We release <span>hundreds of features</span> and improvements each year to help you stay ahead of industry shifts. (On average, we deploy our production API 16x per day.)
              </TextSmall>
            </TextBox>

      
            
            <TextBox>
            <IconWrapper>
            <FaLock/>
            </IconWrapper>
              <TextSmall title>Battle-tested reliability   <LineBorder /></TextSmall>
              <TextSmall>
             Our systems operate with <span>99.9%+</span> uptime and are highly scalable and redundant. Stripe is certified to the highest compliance standards.
              </TextSmall>
            </TextBox>
            
    

            <TextBox>
            <IconWrapper>
            <FaIcicles/>
            </IconWrapper>
              <TextSmall title>Intelligent optimizations   <LineBorder /></TextSmall>
              <TextSmall>
             Our machine learning models train on <span>billions</span> of data points and help increase revenue across conversion, fraud, revenue recovery, and more.
              </TextSmall>
            </TextBox>



          </TextBoxContainer>

   
      
    
      
      </Container>
      </ContainerWrap>
  );
};

//styles

const Button = styled.button`
  color: black;
  border: none;
  border-radius: 25px;
  padding: 9px 15px;
  font-size: 0.95rem;
  cursor: pointer;
  text-align: center;
  background-color: #00d4ff;
`;

const H2 = styled.h2`
  margin: 25px 0;
  font-size: 2.1rem;
  font-weight: 500;
  letter-spacing: -0.1px;
  color: black;
`;

const Text = styled.p`
  margin: 25px 0;
  line-height: 29px;
  letter-spacing: 0.5px;
  font-size: 1.1rem;
  color: #adbdcc;
  span {
    color: #635bff;
    font-weight: 500;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
`;

const TextSmall = styled.p`
  color: ${(props) => (props.title ? "black" : "#425466")};
  font-size: 0.95rem;
  width: 80%;
  font-weight: ${(props) => (props.title ? "500" : "normal")};
  line-height: ${(props) => (props.title ? "" : "160%")};
  padding-bottom: 12px;
  position: relative;
  span {
    color: #635bff;
    font-weight: 500;
    transition: 0.2s;
    &:hover {
      color: black;
    }
  }
  @media (max-width: 599px) {
    width: 100%;
  }
  
`;

const TextBox = styled.div`
  position: relative;
  width: 25%;
  padding: 0 16px;
  @media (max-width: 599px) {
    width: 100%;
    padding-bottom: 75px;
  }
`;

const TextBoxContainer = styled.div`
  padding-top: 75px;
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  @media (max-width: 599px) {
    flex-direction: column;
  }
`;

const HeroText = styled.div`
  max-width: 70%;
  padding: 0 16px;
  @media (max-width: 599px) {
    max-width: 100%;
  }
 
`;

const Img = styled.img`
  position: absolute;
  height: 1100px;
  top:  -100px;
  right: -800px;
  z-index: -1;
`;

const Container = styled.div`
  padding: 110px 0px;
  position: relative;
  max-width: 1080px;
  margin: 0 auto;
  color: #00d4ff;
  @media (max-width: 599px) {
    padding: 90px 0px;
  }
`;

const ContainerWrap = styled.div`
  margin: 0 16px;
`

const IconWrapper = styled.div`
  position: absolute;
  top: -45px;
`

const LineBorder = styled.div`
 position: absolute;
 border-left: 0.5px solid #635bff;
 top: 2px;
 left: -16px;
 height: 50%;
`