
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weatherData,setWeatherData] = useState({ temperature: 0, conditions: "" })

  useEffect (( ) => {
    const fetchWeatherData = () => {
      const mockWeatherData = { temperature: 25, condition: "Sunny" };
      setWeatherData(mockWeatherData);
    }
    fetchWeatherData();
  },[])
  return (
    <div>
        {/* Do not remove the main div */}
        <WeatherDisplay weather={weatherData}/>
    </div>
  )
}

export default App
