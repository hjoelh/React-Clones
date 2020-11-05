import React from "react";
import styled from "styled-components";
import {
  SVG_PAYMENTS,
  SVG_TERMINAL,
  SVG_CONNECT,
  SVG_BILLING,
  SVG_PAYOUTS,
  SVG_ISSUING,
  SVG_RADAR,
  SVG_SIGMA,
  SVG_ATLAS,
} from "../../Misc/SVGs";

export default function DropDown1() {
  return (
    <Wrap>
      <Container>
        <h1>PAYMENTS</h1>

        <section>
          <SVG_PAYMENTS />
          <div>
            <h2>Payments</h2>
            <h3>Online payments</h3>
          </div>
        </section>

        <section>
          <SVG_TERMINAL />
          <div>
            <h2>Terminal</h2>
            <h3>In-person payments</h3>
          </div>
        </section>

        <section>
          <SVG_CONNECT />
          <div>
            <h2>Connect</h2>
            <h3>Payments for platforms</h3>
          </div>
        </section>

        <section>
          <SVG_BILLING />
          <div>
            <h2>Billing</h2>
            <h3>Subscriptions & invoicing</h3>
          </div>
        </section>
      </Container>
      <Container>
        <h1>PAYOUTS</h1>

        <section>
          <SVG_PAYOUTS />
          <div>
            <h2>Payouts</h2>
            <h3>Progammatic payouts</h3>
          </div>
        </section>

        <section>
          <SVG_ISSUING />
          <div>
            <h2>Issuing</h2>
            <h3>Card creation</h3>
          </div>
        </section>
      </Container>
      <Container>
        <h1>BUSINESS OPERATIONS</h1>

        <section>
          <SVG_RADAR />
          <div>
            <h2>Radar</h2>
            <h3>Fraud & risk managment</h3>
          </div>
        </section>

        <section>
          <SVG_SIGMA />
          <div>
            <h2>Sigma</h2>
            <h3>Custom reports</h3>
          </div>
        </section>

        <section>
          <SVG_ATLAS />
          <div>
            <h2>Atlas</h2>
            <h3>Startup incorporation</h3>
          </div>
        </section>
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
  transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const Container = styled.div`
  width: 50%;
  height: 50%;
  padding: 35px;
  letter-spacing: 0.5px;
  font-weight: 500;
  h1 {
    font-size: 0.9rem;
    color: grey;
  }
  h2 {
    font-size: 0.85rem;
    padding-bottom: 0.3em;
    font-weight: 500;
  }
  h3 {
    font-size: 0.9rem;
    color: grey;
    font-weight: 400;
  }
  svg {
    filter: grayscale(85%);
    transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  section {
    margin-top: 32px;
    display: flex;
    width: 100%;
    &:hover svg {
      filter: grayscale(0%);
      cursor: pointer;
    }
    &:hover div {
      opacity: 0.6;
    }
  }
  div {
    display: inline-block;
    height: 100%;
    padding-left: 10px;
    width: 100%;
    opacity: 1;
    transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;
