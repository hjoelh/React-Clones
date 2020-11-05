import React from "react";
import styled from "styled-components";
import {
  IoIosMenu,
  IoIosChatbubbles,
  IoIosPulse,
  IoIosCodeWorking,
  IoIosBook,
} from "react-icons/io";

export default function DropDown2() {
  return (
    <Wrap>
      <Container title>
        <h2>
          {" "}
          <span>
            {" "}
            <IoIosBook />{" "}
          </span>
          Documentation
        </h2>
        <h3>Start integrating Stripe's products and tools</h3>
      </Container>

      <Container>
        <div>
          <h1>GET STARTED</h1>
          <h3>Prebuilt checkout</h3>
          <h3>Libraries and SDKs</h3>
          <h3>Plugins</h3>
          <h3>Code samples</h3>
        </div>

        <div>
          <h1>GUIDES</h1>
          <h3>Accept online payments</h3>
          <h3>Manage subscriptions</h3>
          <h3>Send payments</h3>
          <h3>Set up in-person payments</h3>
        </div>
      </Container>

      <Container alt>
        <div>
          <h2>
            {" "}
            <span>
              <IoIosMenu />{" "}
            </span>{" "}
            Full API reference
          </h2>
          <h2>
            {" "}
            <span>
              <IoIosChatbubbles />
            </span>{" "}
            Support
          </h2>
        </div>

        <div>
          <h2>
            {" "}
            <span>
              <IoIosPulse />
            </span>{" "}
            API status
          </h2>
          <h2>
            {" "}
            <span>
              <IoIosCodeWorking />
            </span>{" "}
            API changelog
          </h2>
        </div>
      </Container>
    </Wrap>
  );
}

// styles

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  z-index: 99;
  border-radius: 10px;
  overflow: hidden;
  transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const Container = styled.div`
  background-color: ${(props) => (props.alt ? "#F6F9FC" : "white")};
  width: 100%;
  letter-spacing: 0.5px;
  font-weight: 500;
  padding: 25px 50px;

  h1 {
    font-size: 0.9rem;
    color: grey;
  }
  h2 {
    font-size: 0.85rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    position: relative;
    padding-top: 15px;
  }
  h3 {
    font-size: 0.9rem;
    color: grey;
    font-weight: 400;
    padding-top: ${(props) => (props.title ? "5px" : "12px")};
  }
  div {
    display: inline-block;
    height: 100%;
    width: 50%;
    transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  span {
    position: absolute;
    left: -27px;
  }
`;
