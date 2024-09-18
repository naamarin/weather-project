import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


const API_KEY = '8ee633956bad6ae1965b557a94ecfcba'; 
const cities = [
  { name: 'אילת', id: 'Eilat' },
  { name: 'לונדון', id: 'London' },
  { name: 'ניו יורק', id: 'New York' },
  { name: 'אלסקה', id: 'Alaska' }
];

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [activeCity, setActiveCity] = useState(cities[0].id);

  // Fetching Weather Data
  useEffect(() => {
    const fetchWeatherData = async () => {
      //  loop through each city and fetch its weather data.
      const promises = cities.map(async (city) => {
        // call the OpenWeatherMap API for each city.
        const response = await axios.get( 
          `http://api.openweathermap.org/data/2.5/weather?q=${city.id}&appid=${API_KEY}&units=metric&lang=he`
        );
        // The response for each city is stored in a new object with the city name and its weather data.
        return { ...city, data: response.data };
      });
      // Await for all the API requests to finish.
      const results = await Promise.all(promises);
      // store the results in the weatherData state as an object where each city is the key.
      const dataMap = results.reduce((acc, city) => {
        acc[city.id] = city.data;
        return acc;
      }, {});
      setWeatherData(dataMap);
    };

    fetchWeatherData();
  }, []);


  return(
    <div className="App">
    <h1>מזג אוויר עולמי</h1>
    <div className="tabs">
      {cities.map((city) => (
        <button
          key={city.id}
          className={`tab-button ${activeCity === city.id ? 'active' : ''}`}
          onClick={() => setActiveCity(city.id)}
        >
          {city.name}
        </button>
      ))}
    </div>

    {weatherData[activeCity] ? (
      <div className="weather-info">
        <h2>{weatherData[activeCity].name}</h2>
        <img src={`http://openweathermap.org/img/w/${weatherData[activeCity].weather[0].icon}.png`} alt="Weather Icon" />
        <p>תיאור: {weatherData[activeCity].weather[0].description}</p>
        <p>טמפרטורה: {weatherData[activeCity].main.temp}°C</p>
        <p>טמפרטורה מורגשת: {weatherData[activeCity].main.feels_like}°C</p>
        <p>לחות: {weatherData[activeCity].main.humidity}%</p>

      </div>
    ) : (
      <p>טוען נתונים...</p>
    )}
</div>
);
}

export default App;