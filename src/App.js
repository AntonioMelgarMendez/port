import React, { useState } from 'react';
import './App.css';
import Navbar from './component/navbar';
import Profile from './component/cardProfile';
import Skills from './component/skills';
import Footer from './component/footer';
import Project from './component/project';
import Aboutme from './component/aboutme';
import Home from './component/home';

function App() {
  const [showProfile, setShowProfile] = useState(true);
  const [startX, setStartX] = useState(null);
  const [currentContent, setCurrentContent] = useState('Home');
  const [transformValue, setTransformValue] = useState(0);

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    const currentX = event.touches[0].clientX;
    const deltaX = currentX - startX;

    const minDeltaX = 50;

    if (deltaX > minDeltaX) {
      setCurrentContent((prevContent) => {
        if (prevContent === 'Home') return 'Skills';
        if (prevContent === 'Skills') return 'Project';
        if (prevContent === 'Project') return 'Aboutme';
        if (prevContent === 'Aboutme') return 'Home';
      });
    } else if (deltaX < -minDeltaX) {
      setCurrentContent((prevContent) => {
        if (prevContent === 'Home') return 'Aboutme';
        if (prevContent === 'Skills') return 'Home';
        if (prevContent === 'Project') return 'Skills';
        if (prevContent === 'Aboutme') return 'Project';
      });
    }

    setTransformValue(-deltaX);
  };

  const handleTouchEnd = () => {
    setStartX(null);
    setTransformValue(0);
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Navbar currentPage={currentContent} />
      {showProfile && <Profile onClose={handleCloseProfile} />}
      {currentContent === 'Home' && <Home />}
      {currentContent === 'Skills' && <Skills />}
      {currentContent === 'Project' && <Project />}
      {currentContent === 'Aboutme' && <Aboutme />}
      <Footer />
    </div>
  );
}

export default App;
