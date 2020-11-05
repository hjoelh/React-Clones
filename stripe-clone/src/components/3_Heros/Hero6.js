import React from "react";
import { FaTags, FaClipboardCheck } from "react-icons/fa";
import styled from "styled-components";
import Button from "../Misc/Button";

export default function Hero6() {
  return (
    <ContainerWrap>
      <Container>
        <Section main>
          <H2>Ready to get started?</H2>
          <Text>
            Explore <span>Stripe Payments,</span> or create an account instantly
            and start accepting payments. You can also contact us to design a
            custom package for your business.
          </Text>
          <Button content="Start now" color="white" background="#635bff" />

          <Button
            content="Contact sales"
            color="#635bff"
            background="transparent"
          />
        </Section>

        <Section>
          <TextBoxContainer>
            <TextBox>
              <IconWrapper>
                <FaTags />
              </IconWrapper>
              <TextSmall title>
                Always know what you pay <LineBorder />
              </TextSmall>
              <TextSmall>
                Integrated per-transaction pricing with no hidden fees.{" "}
              </TextSmall>
              <TextSmall>
                <Button
                  alt
                  content="Pricing details"
                  color="#635bff"
                  background="transparent"
                />
              </TextSmall>
            </TextBox>

            <TextBox>
              <IconWrapper>
                <FaClipboardCheck />
              </IconWrapper>
              <TextSmall title>
                Start your integration <LineBorder />
              </TextSmall>
              <TextSmall>
                Get up and running with Stripe in as little as 10 minutes.{" "}
              </TextSmall>
              <TextSmall>
                <Button
                  alt
                  content="API reference"
                  color="#635bff"
                  background="transparent"
                />
              </TextSmall>
            </TextBox>
          </TextBoxContainer>
        </Section>
      </Container>
    </ContainerWrap>
  );
}

// styles

const Text = styled.p`
  padding: 35px 0;
  line-height: 29px;
  letter-spacing: 0.5px;
  font-size: 1.1rem;
  color: #425466;
  width: 80%;
  span {
    color: #635bff;
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;

const Container = styled.div`
  max-width: 1080px;
  background-color: transparent;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (max-width: 650px) {
    flex-direction: column;
    margin-top: 60px;
  }
`;

const ContainerWrap = styled.div`
  margin: 0 16px;
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  letter-spacing: -0.1px;
  font-weight: 500;
`;

const TextSmall = styled.p`
  color: ${(props) => (props.title ? "black" : "#425466")};
  padding: 4px 0;
  font-size: 0.9rem;
  line-height: 160%;
  width: 80%;
  position: relative;
  font-weight: ${(props) => (props.title ? "900" : "normal")};
  span {
    color: #635bff;
    font-weight: 500;
  }
`;

const TextBox = styled.div`
  width: 50%;
  padding: 45px 16px;
  position: relative;
  @media (max-width: 650px) {
    width: 100%;
  }
`;

const TextBoxContainer = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const Section = styled.div`
  padding: 100px 0;
  width: 50%;
  position: relative;
  padding-left: ${(props) => (props.main ? "16px" : "")};
  @media (max-width: 650px) {
    width: 100%;
    padding: 30px 0;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0px;
`;

const LineBorder = styled.div`
  position: absolute;
  border-left: 0.5px solid #00d4ff;
  top: 10px;
  left: -16px;
  height: 40%;
`;
