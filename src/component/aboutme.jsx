// aboutme.js

import React from 'react';
import '../style/aboutme.css';

const Aboutme = () => {
  return (
    <div className="aboutme-container">
      <div className="aboutme-content">
        <h2 className="aboutme-title">About Me</h2>
        <p className="aboutme-description">
          Welcome to my personal space! I'm passionate about technology and
          creativity. With a background in [tu campo o experiencia], I strive to
          [tu misión o enfoque].
        </p>
        <p className="aboutme-description">
          When I'm not coding, you can find me exploring the latest tech trends,
          working on side projects, or enjoying a good cup of coffee.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
