import React, { useState } from 'react';
import './App.css';
import Navbar from './component/navbar';
import Profile from './component/cardProfile';
import Skills from './component/skills';
import Footer from './component/footer';
import Project from './component/project';
import Aboutme from './component/aboutme';

function App() {
  const [showProfile, setShowProfile] = useState(true);
  const [startX, setStartX] = useState(null);
  const [currentContent, setCurrentContent] = useState('Skills');

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    const currentX = event.touches[0].clientX;
    const deltaX = currentX - startX;

    // Establece una distancia mínima para considerar el deslizamiento
    const minDeltaX = 50;

    if (deltaX > minDeltaX) {
      // Cambia al contenido de la derecha
      setCurrentContent((prevContent) => {
        if (prevContent === 'Skills') return 'Project';
        if (prevContent === 'Project') return 'Aboutme';
        if (prevContent === 'Aboutme') return 'Skills';
      });
    } else if (deltaX < -minDeltaX) {
      // Cambia al contenido de la izquierda
      setCurrentContent((prevContent) => {
        if (prevContent === 'Skills') return 'Aboutme';
        if (prevContent === 'Project') return 'Skills';
        if (prevContent === 'Aboutme') return 'Project';
      });
    }
  };

  const handleTouchEnd = () => {
    // Restablece la posición inicial al finalizar el deslizamiento
    setStartX(null);
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
  };

  return (
    <div
      className="navbarconfig"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Navbar />
      {showProfile && <Profile onClose={handleCloseProfile} />}
      {currentContent === 'Skills' && <Skills />}
      {currentContent === 'Project' && <Project />}
      {currentContent === 'Aboutme' && <Aboutme />}
      <Footer />
    </div>
  );
}

export default App;
