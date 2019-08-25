import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: #058ED9;
  width: 100%;
  height: 10vh;
  color: #F4EBD9;
  font-size: 1.2rem;
  `;

function Footer() {
  return (
    <div>
      <FooterStyles>
        Copyright Nick Durbin &copy; 2019
      </FooterStyles>
    </div>
  )
}

export default Footer;