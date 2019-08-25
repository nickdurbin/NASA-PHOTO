import React from 'react'
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function DisplayMedia({ media, url }) {
  return (media === "video")
  ? 
  <ReactPlayer url={ url } width='60%' height='100%' alt="NASA" controls='true'/>
  :
  <ImgStyle src={ url } alt="NASA" />
}

export default DisplayMedia;