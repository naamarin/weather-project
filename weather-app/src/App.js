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

  useEffect(() => {
    const fetchWeatherData = async () => {
      const promises = cities.map(async (city) => {
        const response = await axios.get( 
          `http://api.openweathermap.org/data/2.5/weather?q=${city.id}&appid=${API_KEY}&units=metric&lang=he`
        );
        return { ...city, data: response.data };
      });
      const results = await Promise.all(promises);
      const dataMap = results.reduce((acc, city) => {
        acc[city.id] = city.data;
        return acc;
      }, {});
      setWeatherData(dataMap);
    };

    fetchWeatherData();
  }, []);
  return(<h1>Weather System</h1>);
}

export default App;