import React from 'react'
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function DisplayMedia(props) {
  return (props.media === "video")
  ? 
  <ReactPlayer url={ props.url } width='100%' height='100%' alt="NASA"/>
  :
  <ImgStyle src={ props.url } alt="NASA"/>
}

export default DisplayMedia