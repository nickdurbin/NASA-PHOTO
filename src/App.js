import React from "react";
import "./App.css";
import styled from 'styled-components';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import VideoPlayer from './Components/VideoPlayer';
import PhotoContainer from './Components/PhotoContainer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <VideoPlayer />
      <PhotoContainer />
      <Footer />
    </div>
  );
}

export default App;
