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
  const [currentBackground, setCurrentBackground] = useState(0); // Nuevo estado para la imagen de fondo actual

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

    // Cambiar la imagen de fondo al finalizar el toque
    setCurrentBackground((prevBackground) => (prevBackground + 1) % totalBackgrounds.length);
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
  };

  const totalBackgrounds = [
    'url(\'./sources/background.jpg\')',
    'url(\'./sources/background2.jpg\')',
    'url(\'./sources/background3.jpg\')',
    'url(\'./sources/background4.jpg\')',
    // Agrega más imágenes según sea necesario
  ];

  return (
    <div
      className="navbarconfig"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
       
        background: currentBackground !== null ? totalBackgrounds[currentBackground] : '',
      }}
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
