import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import '../style/project.css';

import uno from "../sources/uno.png";
import twice from "../sources/twice.png";
import spiderman from "../sources/spiderman.png";
import dm from "../sources/dm.png";

const Project = () => {
  // State to store the current time
  const [currentTime, setCurrentTime] = useState(new Date());

  // Animation spring
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { duration: 500 },
  });

  // Function to format the time in a readable format
  const formatTime = (time) => {
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false, // Use the 24-hour format
    };
    return new Intl.DateTimeFormat('en-US', options).format(time);
  };

  // Function to format the day of the week
  const formatDay = (time) => {
    const options = {
      weekday: 'long',
    };
    return new Intl.DateTimeFormat('en-US', options).format(time);
  };

  // Function to format the date and month
  const formatDateAndMonth = (time) => {
    const options = {
      day: 'numeric',
      month: 'long',
    };
    return new Intl.DateTimeFormat('en-US', options).format(time);
  };

  // Variables to store the day and date
  const day = formatDay(currentTime);
  const dateAndMonth = formatDateAndMonth(currentTime);

  // useEffect to update the time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {/* Show the day in the component */}

      {/* Show the clock in the component */}
      <div className="clock">
        <div className="day">
          <p>{day}</p>
        </div>

        <p className="clock-text">{formatTime(currentTime)}</p>
        <div className="dateAndMonth">
          <p>{dateAndMonth}</p>
        </div>
      </div>

      {/* Show the date and month in the component */}

      <div className="custom-grid">
        <div className="custom-item">
          <a href="https://antoniomelgarmendez.github.io/twice1/">
            <img src={twice} alt="Image 1" className="custom-image" />
          </a>
          <p className="custom-subtitle">Twice Fanpage</p>
        </div>

        <div className="custom-item">
          <a href="https://antoniomelgarmendez.github.io/spiderman1/">
            <img src={spiderman} alt="Image 2" className="custom-image" />
          </a>
          <p className="custom-subtitle">SpiderFan</p>
        </div>

        <div className="custom-item">
          <a href="https://github.com/AntonioMendez123/GestionCProject">
            <img src={uno} alt="Image 3" className="custom-image" />
          </a>
          <p className="custom-subtitle">Uno C++</p>
        </div>

        <div className="custom-item">
          <a href="https://antoniomelgarmendez.github.io/">
            <img src={dm} alt="Image 4" className="custom-image" />
          </a>
          <p className="custom-subtitle">Online Shop</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
