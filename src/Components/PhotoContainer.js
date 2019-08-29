import React, { useState, useEffect } from 'react';
import DisplayMedia from './DisplayMedia';
import styled from 'styled-components';
import axios from 'axios';
import Calendar from 'react-calendar';

const MainContainerStyle = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background-color: #483D3F;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  border-right: 3px solid #058ED9;
  padding: 1rem;
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
  font-size: .8rem;
  width: 95%;
  color: white;
  margin: 0 auto;
  padding: 1rem;
`;

const Photo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  color: white;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 20px auto;
  background-color: #483D3F;
`;

function PhotoContainer() {

  const [url, setUrl] = useState();
  const [date, setDate] = useState();
  const [media, setMedia] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=JiwEVnVzu9wP1E6TyHriFJA7YN5fcEJgROtS05Al`)
    .then(res => {
      setUrl(res.data.url);
      setTitle(res.data.title);
      setDate(res.data.date);
      setDescription(res.data.explanation);
      setMedia(res.data.media_type); 
    })
    .catch(error => {
      console.log('You have an error.', error);
    })
  }, [url, date]);

  return (
      <MainContainerStyle>
        <Info>
          <Description>{ description }</Description>
          <Calendar />
        </Info>
        <Photo>
          <Title>{ title }</Title>
          <ImgContainer>
            <DisplayMedia media={ media } url={ url }/>
          </ImgContainer>
        </Photo>
      </MainContainerStyle>
  )
}

export default PhotoContainer;