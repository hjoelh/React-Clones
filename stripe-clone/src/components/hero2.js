import React from "react";
import calc from "../images/calc.png";
import cc from "../images/cc.png";
import dashboard from "../images/dashboard.png";
import entry from "../images/entry.png";
import phone from "../images/phone.png";
import styled from "styled-components";

export default function Hero2() {
  return (
    <Background>
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
              online and in-person retailers, subscriptions businesses, software
              platforms and marketplaces,{" "}
            </span>{" "}
            and everything in between.
          </Text>
          <Text2>
            We also help companies{" "}
            <span>
              {" "}
              beat fraud, send invoices, issue virtual and physical cards, get
              financing, manage business spend,{" "}
            </span>{" "}
            and much more.
          </Text2>
        </TextWrap>

        <Button>Start with payments 
       <Arrow
     width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
      <path d="M0 5h7"></path>
      <path d="M1 1l4 4-4 4"></path>
    </Arrow></Button>
        <ImgWrap>
          <img
            style={{
              height: "225px",
              position: "absolute",
              left: "0px",
              top: "0px",
            }}
            src={cc}
            alt="Credit Card"
          />
          <img
            style={{
              height: "400px",
              position: "absolute",
              left: "400px",
              top: "0px",
            }}
            src={entry}
            alt="Pay Invoice"
          />
          <img
            style={{
              height: "750px",
              position: "absolute",
              left: "75px",
              top: "275px",
            }}
            className="phone"
            src={phone}
            alt="Apple Pay Checkout"
          />
          <img
            style={{
              height: "500px",
              position: "absolute",
              left: "400px",
              top: "450px",
            }}
            src={dashboard}
            alt="Product Dashboard"
          />
          <img
            style={{
              height: "525px",
              position: "absolute",
              left: "1000px",
              top: "-110px",
            }}
            src={calc}
            alt="Terminal"
          />
        </ImgWrap>
      </Container>
    </Background>
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
    font-weight: 500;
    transition: 0.2s;
    &:hover {
      color: black;
    }
  }
`;

const Text2 = styled(Text)`
  padding: 35px 16px;
`;

const Button = styled.button`
  color: white;
  border: none;
  border-radius: 25px;
  padding: 8px 14px;
  font-size: 0.95rem;
  cursor: pointer;
  text-align: center;
  background-color: #635bff;
  transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  &:hover {
    background-color: black;
  }
`;

const H2 = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  width: 50%;
`;

const ImgWrap = styled.div`
  margin: 50px 0;
  position: relative;
  max-width: 100%;
  height: 100px;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  p {
    padding-right: 90px;
    width: 50%;
  }
`;

const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 700px;
  background-color: transparent;
  padding: 0 16px;
`;

const Background = styled.div`
  width: 100%;
  background-color: #f6f9fc;
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
