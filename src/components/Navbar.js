import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
} from "./Navbar.styles";

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> Home</NavbarLink>
            <NavbarLink to="/money"> Mobile Money</NavbarLink>
            <NavbarLink to="/contacts"> Sim Contacts</NavbarLink>
            <NavbarLink to="/voice"> Voice Calls</NavbarLink>
            <NavbarLink to="/ussd"> USSD Calls</NavbarLink>
            <NavbarLink to="/bulk"> Bulk Messaging</NavbarLink>
            <NavbarLink to="/data"> Manage Data</NavbarLink>
            <NavbarLink to="/whatsapp"> Whatsapp</NavbarLink>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer></RightContainer>
      </NavbarInnerContainer>
    </NavbarContainer>
  );
}

export default Navbar;
