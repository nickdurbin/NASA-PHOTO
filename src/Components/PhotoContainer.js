import React from 'react';
import styled from 'styled-components';

const PhotoContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 80vh;
  margin: 0 auto;
`;

function PhotoContainer() {
  return (
    <PhotoContainerStyle>
      <h1>I will display the photo from NASA.</h1>
    </PhotoContainerStyle>
  )
}

export default PhotoContainer;