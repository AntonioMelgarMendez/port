// SkillsSection.jsx

import React, { useState } from 'react';
import html from '../sources/html.png'; // HTML
import css from '../sources/css.png'; // CSS
import js from '../sources/js.png'; // JS
import ts from '../sources/ts.png'; // TS
import react from '../sources/react.png'; // React
import tailwinds from '../sources/tailwind.png'; // Tailwind CSS
import git from '../sources/git.png'; // Git
import cplusplus from '../sources/c++.png'; // C++
import python from '../sources/python.png'; // Python
import nodejs from '../sources/nodejs.png'; // Node.js
import vite from '../sources/vite.png'; // Vite
import csharp from '../sources/csharp.png'; // C#
import '../style/skills.css';

const SkillsSection = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const skillsData = [
    { image: html, text: 'HTML' },
    { image: css, text: 'CSS' },
    { image: js, text: 'JavaScript' },
    { image: ts, text: 'TypeScript' },
    { image: react, text: 'React' },
    { image: tailwinds, text: 'Tailwind' },
    { image: git, text: 'Git' },
    { image: cplusplus, text: 'C++' },
    { image: python, text: 'Python' },
    { image: nodejs, text: 'Node' },
    { image: vite, text: 'Vite' },
    { image: csharp, text: 'C#' },
  ];

  const handleItemClick = (index) => {
    setClickedIndex(index);

    // Después de 1000 milisegundos (1 segundo), resetea el estado
    setTimeout(() => {
      setClickedIndex(null);
    }, 500);
  };

  return (
    <div className="skills-container">
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className={`app-item ${index === clickedIndex ? 'clicked' : 'clickable'}`}
            onClick={() => handleItemClick(index)}
          >
            <img src={skill.image} alt={skill.text} className="app-image" />
            <p className="app-text">{skill.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
