import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MainContainerStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  margin: 0 auto;
  background-color: #483D3F;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 600;
  color: white;
  margin: 0 auto;
  padding: 1rem;
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 80%;
  color: white;
  margin: 0 auto;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 60%;
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
  const [date, setDate] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=JiwEVnVzu9wP1E6TyHriFJA7YN5fcEJgROtS05Al&date=2012-03-14`)
    .then(res => {
      setUrl(res.data.url);
      setTitle(res.data.title);
      setDescription(res.data.explanation);
      setDate(res.data.date);
    })
    .catch(error => {
      console.log('You have an error.', error);
    })
  }, [url]);

  return (
    <MainContainerStyle>

      <Title>{ title }</Title>
      <ImgContainer>
        <ImgStyle src={ url } alt="NASA" />
      </ImgContainer>
      <Description>{ description }</Description>
    </MainContainerStyle>
  )
}

export default PhotoContainer;