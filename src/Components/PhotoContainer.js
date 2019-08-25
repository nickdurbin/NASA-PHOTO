import React from 'react';
import styled from 'styled-components';

const MainContainerStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  margin: 0 auto;
  background-color: darkgrey;
`;

function PhotoContainer() {
  return (
    <MainContainerStyle>
      <h1>I will display the photo from NASA.</h1>
    </MainContainerStyle>
  )
}

export default PhotoContainer;