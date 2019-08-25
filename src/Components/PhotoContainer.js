import React, { useState, useEffect } from 'react';
import DisplayMedia from './DisplayMedia';
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
  font-size: 2.5rem;
  font-weight: 600;
  color: white;
  margin: 10px auto;
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

function PhotoContainer() {

  const [url, setUrl] = useState();
  const [date, setDate] = useState();
  const [media, setMedia] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  // &date=2019-08-24

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=JiwEVnVzu9wP1E6TyHriFJA7YN5fcEJgROtS05Al`)
    .then(res => {
      setUrl(res.data.url);
      setTitle(res.data.title);
      setDescription(res.data.explanation);
      setDate(res.data.date);
      setMedia(res.data.media_type) 
    })
    .catch(error => {
      console.log('You have an error.', error);
    })
  }, [url, date]);

  return (
    <MainContainerStyle>
      <Title>{ title }</Title>
      <ImgContainer>
        <DisplayMedia media={ media } url={ url }/>
      </ImgContainer>
      <Description>{ description }</Description>
    </MainContainerStyle>
  )
}

export default PhotoContainer;