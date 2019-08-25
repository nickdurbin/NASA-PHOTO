import React from "react";
import "./App.css";
import styled from 'styled-components';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import PhotoContainer from './Components/PhotoContainer';

const HomePageStyle = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

function App() {
  return (
    <HomePageStyle>
      <Navigation />
      <PhotoContainer />
      <Footer />
    </HomePageStyle>
  );
}

export default App;