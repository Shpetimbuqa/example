import React, { useState } from "react";
import {
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

export default function Header(props) {
  return (
    <header>
      <div>
        <Navbar color="light" light expand="md" className="py-2">
          <NavbarBrand href="/">Gallery</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="www.google.com">Google</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Log Out</NavbarText>
        </Navbar>
      </div>
    </header>
  );
}
