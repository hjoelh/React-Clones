import React from "react";
import styled from "styled-components";
import { TiLocationArrow, TiLocation } from "react-icons/ti";
import { StripeLogo } from "./Misc/SVGs";

export default function Footer() {
  return (
    <Background>
      <ContainerWrap>
        <Container>
          <div>
            <ul>
              <StripeLogo color="black" />

              <Item>
                <span>
                  <TiLocationArrow />
                </span>
                United Kingdom
              </Item>

              <Item>
                <span>
                  <TiLocation />
                </span>
                English (United States)
              </Item>
            </ul>
          </div>

          <div>
            <ul>
              <Item bold>Products</Item>
              <Item>Payments</Item>
              <Item>Billings</Item>
              <Item>Connect</Item>
              <Item>Payouts</Item>
              <Item>Atlas</Item>
              <Item>Radar</Item>
              <Item>Issuing</Item>
              <Item>Terminal</Item>
              <Item>Corporate Card</Item>
              <Item>Capital</Item>
              <Item>Sigma</Item>
              <Item>Pricing</Item>
            </ul>
          </div>
          <div>
            <ul>
              <Item bold>Developers</Item>
              <Item>Documentation</Item>
              <Item>API reference</Item>
              <Item>API status</Item>
            </ul>

            <ul>
              <Item bold>Company</Item>
              <Item>About</Item>
              <Item>Customers</Item>
              <Item>Partners</Item>
              <Item>Environment</Item>
              <Item>Jobs</Item>
              <Item>Blog</Item>
              <Item>Newsroom</Item>
            </ul>
          </div>
          <div>
            <ul>
              <Item bold>Use cases</Item>
              <Item>SaaS</Item>
              <Item>Platforms</Item>
              <Item>Marketpalces</Item>
              <Item>Enterprise</Item>
            </ul>

            <ul>
              <Item bold>Resources</Item>
              <Item>Support</Item>
              <Item>Contact</Item>
              <Item>Guides</Item>
              <Item>Privacy & terms</Item>
              <Item>Itemcenses</Item>
              <Item>Sitemap</Item>
              <Item>Cookie settings</Item>
            </ul>
          </div>
        </Container>
      </ContainerWrap>
    </Background>
  );
}

//styles

const Container = styled.div`
display: grid;
grid: auto/repeat(4,1fr);
  max-width: 1080px;
  margin: 0 auto;
  font-size: 0.95rem;
  background-color: transparent;
  padding-top: 175px;
  padding-bottom: 100px;
  ul {
    margin-top: 25px;
    line-height: 25px;
    list-style-type: none;
  }
  div {
    width: 100%;
    padding: 0 16px;
  }
  @media (max-width: 525px) {
    grid: auto/repeat(2,1fr);
  }
`;

const ContainerWrap = styled.div`
  margin: 0 16px;
`;

const Background = styled.div`
  width: 100%;
  background-color: #f6f9fc;
  clip-path: polygon(0 12%, 100% 0%, 100% 100%, 0% 100%);
`;

const Item = styled.li`
  font-weight: ${(props) => (props.bold ? "500" : "normal")};
  padding-bottom: 4px;
  transition: 0.2s;
  cursor: ${(props) => (props.bold ? "" : "pointer")};
  &:hover {
    opacity: ${(props) => (props.bold ? "1" : ".6")};
  }
`;

const LogoWrap = styled.div`
  color: black;
`;
