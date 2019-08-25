import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: darkblue;
  width: 100%;
  height: 100px;
  color: white;
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