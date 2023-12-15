import React from 'react';
import icon1 from '../sources/home.png';
import icon2 from '../sources/skills.png';
import icon3 from '../sources/setting.png';
import icon4 from '../sources/about.png';
import '../style/footer.css';

const Footer = () => {
  return (
    <div className="icon-container">
      <img src={icon1} alt="Home" className="icon" title="Home" />
      <img src={icon2} alt="Skills" className="icon" title="Skills" />
      <img src={icon3} alt="Settings" className="icon" title="Settings" />
      <img src={icon4} alt="About" className="icon" title="About" />
    </div>
  );
};

export default Footer;
