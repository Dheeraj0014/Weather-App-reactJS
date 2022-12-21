import React from "react";
import "./current-weather.css";

const currentWeather = ({data}) => {
  return (
    <div id="Weather">
      <div id="top">
        <div>
          <p id="city">{data.city}</p>
          <p id="weather-description">{data.weather[0].description}</p>
        </div>
        <img alt="weather" id="weather-icon" src={`weather-icon/${data.weather[0].icon}.png`} />
      </div>
      <div id ="bottom">
        <p id ="temperature">{Math.round(data.main.temp)}°C</p>
        <div id="details">
          <div id="parameter-rows">
            <span id=" parameter-label">Details</span>
          </div>
          <div id="parameter-rows"> 
            <span id=" parameter-label">Feels-like</span>
            <span id=" parameter-values">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div id="parameter-rows">
            <span id=" parameter-label">Wind</span>
            <span id=" parameter-values">{data.wind.speed} m/s</span>
          </div>
          <div id="parameter-rows">
            <span id=" parameter-label">Humidity</span>
            <span id=" parameter-values">{data.main.humidity}%</span>
          </div>
          <div id="parameter-rows">
            <span id=" parameter-label">Pressure</span>
            <span id=" parameter-values">{data.main.pressure}hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default currentWeather;
