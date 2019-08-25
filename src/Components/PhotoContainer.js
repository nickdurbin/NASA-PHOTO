import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MainContainerStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  margin: 0 auto;
  background-color: #111;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  margin: 0 auto;
  background-color: #EEE;
`;

const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function PhotoContainer() {

  const [url, setUrl] = useState();

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=JiwEVnVzu9wP1E6TyHriFJA7YN5fcEJgROtS05Al&date=2012-03-14`)
    .then(res => {
      setUrl(res.data.url);
    })
    .catch(error => {
      console.log('You have an error.', error);
    })
  }, [url]);

  return (
    <MainContainerStyle>
      <ImgContainer>
        <ImgStyle src={ url } alt="NASA"/>
      </ImgContainer>
    </MainContainerStyle>
  )
}

export default PhotoContainer;