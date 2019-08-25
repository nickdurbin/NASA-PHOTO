import React from "react";
import "./App.css";
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
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Footer />
    </div>
  );
}

export default App;
