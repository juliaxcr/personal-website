import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  MobileIcon,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Home</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="photography">Photography</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
