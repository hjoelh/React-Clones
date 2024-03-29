import React from "react";
import globe from "../../images/globe.png";
import styled from "styled-components";

export default function Hero5() {
  return (
    <Background>
    <ContainerWrap> 
      <Container>
        <HeroText>
          <Text>
            <span>Global scale</span>
          </Text>

          <H2>The backbone for internet business</H2>

          <Text>
          For ambitious companies around the world, Stripe makes moving money as simple, borderless, and programmable as the rest of the internet. Our teams are based in dozens of offices around the world and we process hundreds of billions of pounds each year for <span> startups to large enterprises.</span>
          </Text>
          </HeroText>


          <TextBoxContainer>

            <TextBox>
                <TextSmall title>250M+ <LineBorder /></TextSmall>
              <TextSmall>
              API requests per day, peaking at 13,000 requests a second. 
              </TextSmall>
            </TextBox>

        
            <TextBox>
              <TextSmall title>90%<LineBorder /></TextSmall>
              <TextSmall>
              of U.S. adults have bought from businesses using Stripe. 
              </TextSmall>
            </TextBox>

      
            
            <TextBox>
              <TextSmall title>135+<LineBorder /></TextSmall>
              <TextSmall>
              currencies and payment methods supported. 
              </TextSmall>
            </TextBox>
            
    

            <TextBox>
              <TextSmall title>35+<LineBorder /></TextSmall>
              <TextSmall>
              countries with local acquiring, optimizing acceptance rates. 
              </TextSmall>
            </TextBox>



          </TextBoxContainer>

   
            <Img src={globe} alt="code" />
    
      
      </Container>
      </ContainerWrap>
    </Background>
  );
};

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
`;

const H2 = styled.h2`
  margin: 25px 0;
  font-size: 2.1rem;
  font-weight: 500;
  letter-spacing: -0.1px;
  color: white;
  @media (max-width: 800px) {
    max-width: 100%;
  }
`;

const Text = styled.p`
  margin: 25px 0;
  line-height: 29px;
  letter-spacing: 0.5px;
  font-size: 1.1rem;
  color: #adbdcc;
  span {
    color: #00d4ff;
    font-weight: 500;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
`;

const TextSmall = styled.p`
  color: ${(props) => (props.title ? "white" : "#adbdcc")};
  font-size: ${props => props.title ? '1.5rem' : '1rem'};
  font-weight: ${(props) => (props.title ? "500" : "normal")};
  line-height: ${props => (props.title ? '' : '150%')};
  padding-bottom: .4em;
  span {
    color: #00d4ff;
  }
`;

const TextBox = styled.div`
  position: relative;
  width: 25%;
  padding-left: 16px;
  @media (max-width: 599px) {
    width: 100%;
    padding-bottom: 25px;
  }
`;

const TextBoxContainer = styled.div`
  margin: 50px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  @media (max-width: 599px) {
    flex-direction: column;
  }
`;

const HeroText = styled.div`
  max-width: 40%;
  padding: 0 16px;
  @media (max-width: 800px) {
    max-width: 100%;
  }
`;

const Img = styled.img`
  position: absolute;
  height: 1100px;
  top:  -100px;
  left: -1000px;
  z-index: -1;
`;

const Container = styled.div`
  padding-top: 175px;
  padding-bottom: 75px;
  position: relative;
  max-width: 1080px;
  margin: 0 auto;
  color: #00d4ff;
  @media (max-width: 800px) {
    padding-top: 125px;
    padding-bottom: 5px;
  }
`;

const ContainerWrap = styled.div`
  margin: 0 16px;
`

const Background = styled.div`
  width: 100%;
  background-color: #0a2540;
  clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0% 100%);
  @media (max-width: 800px) {
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0% 100%);
  }
`;

const LineBorder = styled.div`
 position: absolute;
 border-left: 0.5px solid #00d4ff;
 top: 4px;
 left: 0px;
 height: 20px;
`

