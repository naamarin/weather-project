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
  }, [activeCity]);

  // Function to determine the color class based on the temperature
  const getTempClass = (cityId) => {
    if (!weatherData[cityId]) return '';
    const temp = weatherData[cityId].main.temp;

    if (temp <= 20) {
      return 'weather-gray';
    } else if (temp > 20 && temp < 30) {
      return 'weather-light-blue';
    } else {
      return 'weather-yellow-orange';
    }
  };

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
      <div className={`weather-info ${getTempClass(activeCity)}`}>
        <div className="box">
          <div className='weather'>
            <img src={`http://openweathermap.org/img/wn/${weatherData[activeCity].weather[0].icon}@2x.png`} alt="Weather Icon" />
            <p className='tempeture'>{weatherData[activeCity].main.temp}<span>°C</span></p>
            <p className='description'>{weatherData[activeCity].weather[0].description}</p>
            <p className='feelsLike'>טמפרטורה מורגשת: {weatherData[activeCity].main.feels_like}<span>°C</span></p>
            <p className='humidity'>לחות: <span>{weatherData[activeCity].main.humidity}%</span></p>
          </div>
        </div>
      </div>
    ) : (
      <p>טוען נתונים...</p>
    )}
</div>
);
}

export default App;