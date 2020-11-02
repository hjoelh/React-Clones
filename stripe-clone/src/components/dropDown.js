import React from "react";
import styled from "styled-components";
import {
  SVG_payments,
  SVG_terminal,
  SVG_connect,
  SVG_billing,
  SVG_payouts,
  SVG_issuing,
  SVG_radar,
  SVG_sigma,
  SVG_atlas,
} from "./SVGs";
import {
  IoIosMenu,
  IoIosChatbubbles,
  IoIosPulse,
  IoIosCodeWorking,
  IoMdCheckboxOutline,
  IoIosPerson,
  IoIosPlanet,
  IoIosPersonAdd,
  IoIosPaper,
  IoIosHand,
  IoIosAttach,
  IoIosBook,
} from "react-icons/io";

export function DropDownMenu1() {
  return (
    <DropDown>
      <DropContainer1>
        <h1>PAYMENTS</h1>

        <section>
          <SVG_payments />
          <div>
            <h2>Payments</h2>
            <h3>Online payments</h3>
          </div>
        </section>

        <section>
          <SVG_terminal />
          <div>
            <h2>Terminal</h2>
            <h3>In-person payments</h3>
          </div>
        </section>

        <section>
          <SVG_connect />
          <div>
            <h2>Connect</h2>
            <h3>Payments for platforms</h3>
          </div>
        </section>

        <section>
          <SVG_billing />
          <div>
            <h2>Billing</h2>
            <h3>Subscriptions & invoicing</h3>
          </div>
        </section>
      </DropContainer1>
      <DropContainer1>
        <h1>PAYOUTS</h1>

        <section>
          <SVG_payouts />
          <div>
            <h2>Payouts</h2>
            <h3>Progammatic payouts</h3>
          </div>
        </section>

        <section>
          <SVG_issuing />
          <div>
            <h2>Issuing</h2>
            <h3>Card creation</h3>
          </div>
        </section>
      </DropContainer1>
      <DropContainer1>
        <h1>BUSINESS OPERATIONS</h1>

        <section>
          <SVG_radar />
          <div>
            <h2>Radar</h2>
            <h3>Fraud & risk managment</h3>
          </div>
        </section>

        <section>
          <SVG_sigma />
          <div>
            <h2>Sigma</h2>
            <h3>Custom reports</h3>
          </div>
        </section>

        <section>
          <SVG_atlas />
          <div>
            <h2>Atlas</h2>
            <h3>Startup incorporation</h3>
          </div>
        </section>
      </DropContainer1>
    </DropDown>
  );
}

export function DropDownMenu2() {
  return (
    <DropDown2>
      <DropContainer2 title>
        <h2>
          {" "}
          <span>
            {" "}
            <IoIosBook />{" "}
          </span>
          Documentation
        </h2>
        <h3>Start integrating Stripe's products and tools</h3>
      </DropContainer2>

      <DropContainer2>
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
      </DropContainer2>

      <DropContainer2 alt>
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
      </DropContainer2>
    </DropDown2>
  );
}

export function DropDownMenu3() {
  return (
    <DropDown3>
      <DropContainer3>
        <div>
          <h2><span><IoMdCheckboxOutline /></span>
            About Stripe
          </h2>

          <h2>
           <span> <IoIosPerson /></span> 
           Customers
          </h2>

          <h2>
           <span>  <IoIosPlanet />  </span>  
           Enterprise
          </h2>
        </div>

        <div>
          <h2>
           <span>  <IoIosPersonAdd />   </span>  Jobs
          </h2>
          <h2>
            <span> <IoIosPaper />    </span> Newsroom
          </h2>
          <h2>
           <span> <IoIosHand />   </span>  Partners
          </h2>
        </div>
      </DropContainer3>

      <DropContainer3 alt>
        <div>
          <h2>
            <span> <IoIosAttach />   </span>
            From the Blog
          </h2>
          <h3>European payments methods available worldwide </h3>
          <h3>We built Checkout so you don't have to</h3>
          <h3>To design and develop an interactive globe </h3>
        </div>
      </DropContainer3>
    </DropDown3>
  );
}

export function DropDownMenuMini() {
  return (
    <DropDown4>
      <DropContainer4>
        <div>
        <h3>PRODUCTS</h3>

          <h2>
            <span><IoMdCheckboxOutline /></span> 
          Payments
          </h2>

          <h2>
           <span><IoIosPerson /></span> 
           Billing
          </h2>

          <h2>
           <span><IoIosPlanet /></span>  
           Payouts
          </h2>

          <h2>
           <span><IoIosPlanet /></span>  
           Radar
          </h2>

          <h2>
           <span><IoIosPlanet /></span>  
           Atlas
          </h2>
        </div>

        <div>
          <h2>
           <span><IoIosPersonAdd /></span>  
           Terminal
          </h2>

          <h2>
            <span><IoIosPaper /></span> 
            Connect
          </h2>

          <h2>
           <span><IoIosHand /></span>  
           Issuing
          </h2>

          <h2>
           <span><IoIosHand /></span>  
           Sigma
          </h2>
        </div>
      </DropContainer4>
      <DropContainer4>
        <div>
          <h2>
            <span><IoMdCheckboxOutline /></span> 
          Pricing
          </h2>

          <h2>
           <span><IoIosPerson /></span> 
           Enterprise
          </h2>

          <h2>
           <span><IoIosPlanet /></span>  
           Partners
          </h2>

          <h2>
           <span><IoIosPlanet /></span>  
           Documentation
          </h2>

          <h2>
           <span><IoIosPlanet /></span>  
           Blog
          </h2>
        </div>

        <div>
          <h2>
           <span><IoIosPersonAdd /></span>  
           About Stripe
          </h2>

          <h2>
            <span><IoIosPaper /></span> 
            Jobs
          </h2>

          <h2>
           <span><IoIosHand /></span>  
           Newsroom
          </h2>

          <h2>
           <span><IoIosHand /></span>  
           Support
          </h2>
        </div>
      </DropContainer4>

      <DropContainer4 alt>
     
        <Button alt>Sign in
        <Arrow
     width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
      <path d="M0 5h7"></path>
      <path d="M1 1l4 4-4 4"></path>
    </Arrow>
</Button>
   
      </DropContainer4>
    </DropDown4>
  );
}

// styles

const DropDown = styled.div`
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

const DropContainer1 = styled.div`
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

const DropDown2 = styled(DropDown)`
  padding: 10px;
`;

const DropContainer2 = styled.div`
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

const DropDown3 = styled(DropDown)`
 padding: 10px;
`;

const DropContainer3 = styled.div`
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
    width: ${props => props.alt ? '100%' : '50%'};
    transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  span {
    position: absolute;
    left: -27px;
  }
`;

const DropDown4 = styled(DropDown)`
 padding: 25px;
`;

const DropContainer4 = styled.div`
  background-color: ${(props) => (props.alt ? "#F6F9FC" : "white")};
  width: 100%;
  letter-spacing: 0.5px;
  font-weight: 500;
  padding: 27px 0px;
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
    padding-top: 12px;
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
    
  }
  section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;



const Button = styled.button`
  color: white;
  border: none;
  border-radius: 25px;
  padding: 8px 14px;
  font-size: 0.95rem;
  cursor: pointer;
  opacity: 1;
  text-align: center;
  background-color: purple;
  transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
   &:hover {
     opacity: 0.6;
   }
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