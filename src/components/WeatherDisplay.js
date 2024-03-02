import React from 'react'

function WeatherDisplay({weather}) {
  const temperatureStyle = {
    color : weather.temperature > 20 ? 'red' : 'blue'
  }


  return (
    <div>
        <p style={temperatureStyle}>Temperature : {weather.temperature}</p>
        <p> Condition : {weather.condition}</p>
    </div>
  )
}

export default WeatherDisplay