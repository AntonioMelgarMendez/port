// CardProfile.js
import React, { useState, useEffect } from 'react';
import '../style/cardProfile.css';
import face from '../sources/profile1.png';

const CardProfile = ({ onClose }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Agregar la clase 'animated' después de un breve retraso
    const timeout = setTimeout(() => {
      setAnimated(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []); // Se ejecutará solo al montar el componente

  return (
    <div className={`centered-container ${animated ? 'animated' : ''}`}>
      <div className={`apple-card ${animated ? 'animated' : ''}`}>
        <div className="card-content">
          <div className="close-icon" onClick={onClose}>
            &times;
          </div>
          <h2 className="card-title">MyProfile</h2>
          <img src={face} alt="Imagen" className="card-image" />
          <button className="round-button">Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
