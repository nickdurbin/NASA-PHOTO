import React from 'react'
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const ImgStyle = styled.img`
  width: 90%;
  height: 60vh;
  object-fit: cover;
`;

function DisplayMedia({ media, url }) {
  return (media === "video")
  ? 
  <ReactPlayer url={ url } width='80%' height='60vh' alt="NASA" controls='true'/>
  :
  <ImgStyle src={ url } alt="NASA" />
}

export default DisplayMedia;