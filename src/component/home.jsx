// WeatherCard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../style/home.css";
import Crypto from './crypto';

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;

          const apiKey = 'b099f30634075bf1eab8fbcc8728d842';
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
          setWeatherData(response.data);
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);

        // En caso de error o permisos denegados, cargar datos predeterminados para San Salvador
        const defaultResponse = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=San Salvador&appid=b099f30634075bf1eab8fbcc8728d842');
        setWeatherData(defaultResponse.data);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) {
    return <p className="loading-message">Cargando...</p>;
  }

  if (!weatherData) {
    return <p className="error-message">Error al cargar los datos meteorológicos.</p>;
  }

  const { name, main, weather, main: { temp_max, temp_min } } = weatherData;

  const temperatureCelsius = Math.round(main.temp - 273.15);

  return (
    <div>
      <div className="weather-card">
        <div className="header">
          <div className="left-section">
            <h2>{name}</h2>
            <p className="temperature">{temperatureCelsius}°</p>
          </div>
          <div className="right-section">
            <div className="weather-info">
              <img src={getWeatherIconUrl(weather[0]?.icon)} alt={weather[0]?.description} />
              <p>{weather[0]?.description}</p>
            </div>
            <div className="temperature-range">
              <p>H: {Math.round(temp_max - 273.15)}°</p>
              <p>M: {Math.round(temp_min - 273.15)}°</p>
            </div>
          </div>
        </div>
      </div>
      <Crypto />
    </div>
  );
};

const getWeatherIconUrl = (iconCode) => {
  return `https://openweathermap.org/img/w/${iconCode}.png`;
};

export default Home;
