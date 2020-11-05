import React from "react";
import styled from "styled-components";
import {
  IoMdCheckboxOutline,
  IoIosPerson,
  IoIosPlanet,
  IoIosPersonAdd,
  IoIosPaper,
  IoIosHand,
  IoMdCloseCircleOutline,
} from "react-icons/io";
import Button from "../../Misc/Button";

export default function WrapMini() {
  return (
    <Wrap>
      <CloseMenuBTN_Wrap>
        <IoMdCloseCircleOutline />
      </CloseMenuBTN_Wrap>

      <Container>
        <div>
          <h3>PRODUCTS</h3>

          <h2>
            <span>
              <IoMdCheckboxOutline />
            </span>
            Payments
          </h2>

          <h2>
            <span>
              <IoIosPerson />
            </span>
            Billing
          </h2>

          <h2>
            <span>
              <IoIosPlanet />
            </span>
            Payouts
          </h2>

          <h2>
            <span>
              <IoIosPlanet />
            </span>
            Radar
          </h2>

          <h2>
            <span>
              <IoIosPlanet />
            </span>
            Atlas
          </h2>
        </div>

        <div>
          <h2>
            <span>
              <IoIosPersonAdd />
            </span>
            Terminal
          </h2>

          <h2>
            <span>
              <IoIosPaper />
            </span>
            Connect
          </h2>

          <h2>
            <span>
              <IoIosHand />
            </span>
            Issuing
          </h2>

          <h2>
            <span>
              <IoIosHand />
            </span>
            Sigma
          </h2>
        </div>
      </Container>
      <Container>
        <div>
          <h2>
            <span>
              <IoMdCheckboxOutline />
            </span>
            Pricing
          </h2>

          <h2>
            <span>
              <IoIosPerson />
            </span>
            Enterprise
          </h2>

          <h2>
            <span>
              <IoIosPlanet />
            </span>
            Partners
          </h2>

          <h2>
            <span>
              <IoIosPlanet />
            </span>
            Documentation
          </h2>

          <h2>
            <span>
              <IoIosPlanet />
            </span>
            Blog
          </h2>
        </div>

        <div>
          <h2>
            <span>
              <IoIosPersonAdd />
            </span>
            About Stripe
          </h2>

          <h2>
            <span>
              <IoIosPaper />
            </span>
            Jobs
          </h2>

          <h2>
            <span>
              <IoIosHand />
            </span>
            Newsroom
          </h2>

          <h2>
            <span>
              <IoIosHand />
            </span>
            Support
          </h2>
        </div>
      </Container>

      <Container alt>
        <Button content="Sign in" color="white" background="#635bff" />
      </Container>
    </Wrap>
  );
}

// styles

const Wrap = styled.div`
  background-color: white;
  z-index: 99;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  margin: 0 -16px;
  padding-top: 30px;
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
  padding: 20px ;
  display: flex;
  justify-content: center;
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
    padding-top: 10px;
  }
  h3 {
    font-size: 0.9rem;
    color: grey;
    font-weight: 400;
    padding-top: 15px;
    position: absolute;
    top: -40px;
  }
  div {
    display: inline-block;
    width: 50%;
    transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
    position: relative;
  }
  span {
    padding-right: 7px;
  }
  section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CloseMenuBTN_Wrap = styled.div`
  position: absolute;
  top: 22px;
  right: 20px;
`;
