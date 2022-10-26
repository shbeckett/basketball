import React from "react";
import './App.css';
import CameraSelect from './components/CameraSelect';
import videojs from 'video.js';
import VideoJS from './components/VideoJS';
import Video from './components/Video';
import 'video.js/dist/video-js.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <CameraSelect/>
    </div>
  );
}

export default App;
