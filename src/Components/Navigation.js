import React from 'react';
import styled from 'styled-components';

const NavigationStyles = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: darkblue;
  color: white;
  font-weight: 600;
`;

const NavHeader = styled.h1`
  margin-left: 2rem;
  font-size: 3rem;
  font-weight: 600;
`;

const AnchorStyles = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 0 2rem;
`;

function Navigation() {

  return (
    <div>
      <NavigationStyles>
        <NavHeader>POTD</NavHeader>
        <div className="navLinks">
          <AnchorStyles href="https://twitter.com/">Sign-Up</AnchorStyles>
          <AnchorStyles href="https://twitter.com/">Log-in</AnchorStyles>
        </div>
      </NavigationStyles>
    </div>
  )
}

export default Navigation;