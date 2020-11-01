import React from "react";
import styled from "styled-components";
import { DropDownMenu1, DropDownMenu2, DropDownMenu3 } from "./dropDown";
import { StripeLogo, Arrow_SVG } from "./SVGs";
import { IconContext } from "react-icons";


export default function Header() {
  return (
    <IconContext.Provider value={{size: '1.5em', color: '#87ADD2'}}>
    <Container>
      <StripeLogo />
      <Nav>

        <NavItem>
          <NavLink>Products</NavLink>
          <DropDownContainer>
            <DropDownMenu1 />
          </DropDownContainer>
        </NavItem>

        <NavItem>
          <DropDownContainer>
            <DropDownMenu2 />
          </DropDownContainer>
          <NavLink>Developers</NavLink>
        </NavItem>

        <NavItem>
          <DropDownContainer>
            <DropDownMenu3 />
          </DropDownContainer>
          <NavLink>Company </NavLink>
        </NavItem>

        <NavLink alt>Pricing </NavLink>
      </Nav>
      <Button>
        Sign in
      
      <Arrow width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
              <path d="M0 5h7"></path>
              <path d="M1 1l4 4-4 4"></path> 
        </Arrow>

      </Button>
     
    </Container>
     </IconContext.Provider>
  );
}

// styles

const NavLink = styled.button`
  color: white;
  border: none;
  background-color: transparent;
  font-size: 0.95rem;
  padding: 0 1.2em;
  cursor: ${(props) => (props.alt ? "pointer" : "")};
  transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  &:hover {
    opacity: 0.5;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  max-width: 1080px;
  margin: 0 auto;
  padding: 7px 16px;
  position: relative;
`;

const Button = styled.button`
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 25px;
  font-size: 0.95rem;
  margin: 0 1.1rem;
  cursor: pointer;
  text-align: center;
  background-color: hsla(0, 0%, 100%, 0.2);
  transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  &:hover {
    background-color: hsla(0, 0%, 100%, 0.4);
  }
`;

const Nav = styled.nav`
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

const NavItem = styled.li`
  list-style: none;
  display: inline-block;
  padding: 25px 0;
`;

const DropDownContainer = styled.div`
  position: absolute;
  top: 75px;
  left: 210px;
  z-index: 100;
  opacity: 0;
  width: 100%;
  transition: 250ms cubic-bezier(0.215, 0.61, 0.355, 1);
  pointer-events: none;
  ${NavItem}:hover & {
    opacity: 1;
    pointer-events: all;
  }
  &:hover {
    opacity: 1;
    pointer-events: all;
  }
`;
