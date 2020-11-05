import React from "react";
import styled from "styled-components";
import {
  IoMdCheckboxOutline,
  IoIosPerson,
  IoIosPlanet,
  IoIosPersonAdd,
  IoIosPaper,
  IoIosHand,
  IoIosAttach,
} from "react-icons/io";

export default function DropDown3() {
  return (
    <Wrap>
      <Container>
        <div>
          <h2>
            <span>
              <IoMdCheckboxOutline />
            </span>
            About Stripe
          </h2>

          <h2>
            <span>
              {" "}
              <IoIosPerson />
            </span>
            Customers
          </h2>

          <h2>
            <span>
              {" "}
              <IoIosPlanet />{" "}
            </span>
            Enterprise
          </h2>
        </div>

        <div>
          <h2>
            <span>
              {" "}
              <IoIosPersonAdd />{" "}
            </span>{" "}
            Jobs
          </h2>
          <h2>
            <span>
              {" "}
              <IoIosPaper />{" "}
            </span>{" "}
            Newsroom
          </h2>
          <h2>
            <span>
              {" "}
              <IoIosHand />{" "}
            </span>{" "}
            Partners
          </h2>
        </div>
      </Container>

      <Container alt>
        <div>
          <h2>
            <span>
              {" "}
              <IoIosAttach />{" "}
            </span>
            From the Blog
          </h2>
          <h3>European payments methods available worldwide </h3>
          <h3>We built Checkout so you don't have to</h3>
          <h3>To design and develop an interactive globe </h3>
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
    padding-top: 20px;
  }
  h3 {
    font-size: 0.9rem;
    color: grey;
    font-weight: 400;
    padding-top: 15px;
  }
  div {
    display: inline-block;
    height: 100%;
    width: ${(props) => (props.alt ? "100%" : "50%")};
    transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  span {
    position: absolute;
    left: -27px;
  }
`;
