import React from 'react';
import styled from 'styled-components';

const NavigationStyles = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  padding: 0 2rem;
`;

const AnchorStyles = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 600;
  padding-right: 4rem;
`;

function Navigation() {

  return (
    <div>
      <NavigationStyles>
        <h1>NASA Photo Of The Day!</h1>
        <div className="navLinks">
          <AnchorStyles href="https://twitter.com/">Sign-Up</AnchorStyles>
          <AnchorStyles href="https://twitter.com/">Log-in</AnchorStyles>
        </div>
      </NavigationStyles>
    </div>
  )
}

export default Navigation;