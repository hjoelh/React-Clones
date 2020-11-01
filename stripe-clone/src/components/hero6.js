import React from "react";
import { FaTags, FaClipboardCheck } from "react-icons/fa";
import styled from "styled-components";

export default function Hero6() {
  return (
    <Container>
      <Section>
        <H2>Ready to get started?</H2>
        <Text>
          Explore <span>Stripe Payments,</span> or create an account instantly
          and start accepting payments. You can also contact us to design a
          custom package for your business.
        </Text>
        <Button>
          Start now
          <Arrow width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
            <path d="M0 5h7"></path>
            <path d="M1 1l4 4-4 4"></path>
          </Arrow>
        </Button>
        <Button alt>
          Contact sales{" "}
          <Arrow width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
            <path d="M0 5h7"></path>
            <path d="M1 1l4 4-4 4"></path>
          </Arrow>
        </Button>
      </Section>

      <Section>
        <TextBoxContainer>
          <BorderWrap>
            <Border />
            <Border />
          </BorderWrap>

          <TextBox>
            <IconWrapper>
              <FaTags />
            </IconWrapper>
            <TextSmall title>Always know what you pay</TextSmall>
            <TextSmall>
              Integrated per-transaction pricing with no hidden fees.{" "}
            </TextSmall>
            <TextSmall>
              <ButtonCard alt>Pricing details     <Arrow width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
            <path d="M0 5h7"></path>
            <path d="M1 1l4 4-4 4"></path>
          </Arrow></ButtonCard>
            </TextSmall>
          </TextBox>

          <TextBox>
            <IconWrapper>
              <FaClipboardCheck />
            </IconWrapper>
            <TextSmall title>Start your integration</TextSmall>
            <TextSmall>
              Get up and running with Stripe in as little as 10 minutes.{" "}
            </TextSmall>
            <TextSmall>
              <ButtonCard alt>API reference     <Arrow width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
            <path d="M0 5h7"></path>
            <path d="M1 1l4 4-4 4"></path>
          </Arrow></ButtonCard>
            </TextSmall>
          </TextBox>
        </TextBoxContainer>
      </Section>
    </Container>
  );
}

// styles

const Button = styled.button`
  color: ${(props) => (props.alt ? "#635bff" : "white")};
  border: none;
  border-radius: 25px;
  padding: 9px 20px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  background-color: ${(props) => (props.alt ? "white" : "#635bff")};
  transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  &:hover {
    background-color: ${(props) => (props.alt ? "" : "black")};
    color: ${(props) => (props.alt ? "black" : "")};
  }
`;

const ButtonCard = styled(Button)`
  padding: 0px;
  border-radius: 0px;
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
`;

const Container = styled.div`
  max-width: 1080px;
  background-color: transparent;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0 16px;
`;

const H2 = styled.h2`
  font-size: 1.75rem;
  font-weight: 500;
`;

const TextSmall = styled.p`
  color: ${(props) => (props.title ? "black" : "#425466")};
  padding: 4px 0;
  font-size: 0.9rem;
  line-height: 160%;
  width: 80%;
  font-weight: ${(props) => (props.title ? "900" : "normal")};
  span {
    color: #635bff;
    font-weight: 500;
  }
`;

const TextBox = styled.div`
  width: 50%;
  padding: 45px 0px;
  position: relative;
`;

const TextBoxContainer = styled.div`
  display: flex;
`;

const Section = styled.div`
  padding: 100px 0;
  width: 50%;
  position: relative;
`;

const Border = styled.div`
  border-left: 1px solid #635bff;
  height: 20px;
  width: 50%;
`;

const BorderWrap = styled.div`
  display: flex;
  left: -16px;
  height: 23px;
  width: 100%;
  top: 150px;
  position: absolute;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0px;
`;
