import React from "react";
import styled from "styled-components";
import {FaAtom, FaAngleDoubleRight, FaIcicles, FaLock} from 'react-icons/fa'

export default function Hero4() {
  return (
      <Container>
        <HeroText>
          <Text>
            <span>Why Stripe</span>
          </Text>

          <H2>A technology-first approach to payments and finance</H2>

  
          </HeroText>


          <TextBoxContainer>

          <BorderWrap>
          <Border/> 
          <Border/> 
          <Border/> 
          <Border/> 
          </BorderWrap>


            <TextBox>
              <IconWrapper>
                <FaAtom/>
              </IconWrapper>

                <TextSmall title>Close to the metal</TextSmall>
              <TextSmall>
              From <span>direct integrations</span> with card networks and banks to checkout flows in the browser, we operate on and optimize at every level of the financial stack.
              </TextSmall>
            </TextBox>

        
            <TextBox>
            <IconWrapper>
            <FaAngleDoubleRight/>
            </IconWrapper>
              <TextSmall title>Fastest-improving platform</TextSmall>
              <TextSmall>
              We release <span>hundreds of features</span> and improvements each year to help you stay ahead of industry shifts. (On average, we deploy our production API 16x per day.)
              </TextSmall>
            </TextBox>

      
            
            <TextBox>
            <IconWrapper>
            <FaLock/>
            </IconWrapper>
              <TextSmall title>Battle-tested reliability</TextSmall>
              <TextSmall>
             Our systems operate with <span>99.9%+</span> uptime and are highly scalable and redundant. Stripe is certified to the highest compliance standards.
              </TextSmall>
            </TextBox>
            
    

            <TextBox>
            <IconWrapper>
            <FaIcicles/>
            </IconWrapper>
              <TextSmall title>Intelligent optimizations</TextSmall>
              <TextSmall>
             Our machine learning models train on <span>billions</span> of data points and help increase revenue across conversion, fraud, revenue recovery, and more.
              </TextSmall>
            </TextBox>



          </TextBoxContainer>

   
      
    
      
      </Container>
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
  font-size: 2.3rem;
  font-weight: 500;
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
  span {
    color: #635bff;
    font-weight: 500;
    transition: 0.2s;
    &:hover {
      color: black;
    }
  }
  
`;

const TextBox = styled.div`
  position: relative;
  width: 25%;
`;

const TextBoxContainer = styled.div`
  padding-top: 75px;
  width: 100%;
  display: flex;
  position: relative;
`;

const HeroText = styled.div`
  max-width: 70%;
`;

const Img = styled.img`
  position: absolute;
  height: 1100px;
  top:  -100px;
  right: -800px;
  z-index: -1;
`;

const Container = styled.div`
  padding: 125px 16px;
  position: relative;
  max-width: 1080px;
  margin: 0 auto;
  color: #00d4ff;
`;


const Border = styled.div`
  border-left: 1px solid #635bff;
  height: 20px;
  width: 25%;
`
const BorderWrap = styled.div`
  display: flex;
  left: -16px;
  height: 23px;
  width: 100%;
  position: absolute;
`

const IconWrapper = styled.div`
  position: absolute;
  top: -45px;
`