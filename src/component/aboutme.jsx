// aboutme.js

import React from 'react';
import '../style/aboutme.css';
import profileImage from '../sources/profile.png'; // Reemplaza con la ruta correcta de tu imagen
import linkedin from "../sources/linkedin.png";
import facebook from "../sources/facebook.png";
import instagram from "../sources/instagram.png";
import faceicon from "../sources/faceicon.jpg";
import Calendar from './calendar';
const Aboutme = () => {
  return (
    <div>
      <div className='marginCalendar'>
       <Calendar/>
      </div>
      <div className="aboutme-container">
        <div className="aboutme-content">


          <h2 className="aboutme-title">Antonio Méndez</h2>
          <p className="aboutme-description1">
          Software Developer
          </p>

          <p className="aboutme-description">
            Welcome to my personal space! I'm passionate about technology and
            creativity. With a background in develop, I strive to
            give a quality services for mi customers.
          </p>

          <p className="aboutme-description-top">
          Download Cv
          </p>
          <div className="social-icons">
            {/* Agrega aquí tus iconos de redes sociales */}
            <a href="url-de-tu-red-social" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="Social Icon 1" />
            </a>
            <a href="url-de-tu-red-social" target="_blank" rel="noopener noreferrer">
              <img src={facebook}  alt="Social Icon 2" />
            </a>
            <a href="url-de-tu-red-social" target="_blank" rel="noopener noreferrer">
              <img src={instagram}  alt="Social Icon 2" />
            </a>
            {/* Agrega más enlaces e iconos según sea necesario */}
          </div>
      
        </div>
      </div>

    </div>
  );
};

export default Aboutme;
