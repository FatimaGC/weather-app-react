import React from "react";
import "./styles.css";

export default function Degrees({ temperature, description }) {
  return (
    <div className="col">
      <p className="current-weather_degrees" id="current-weather">
        {temperature}°
      </p>
      <span className="current-weather_units">
        <a href="/" id="celsius-link">
          C
        </a>
        |
        <a href="/" id="fahrenheit-link">
          F
        </a>
      </span>
      <span className="current-weather_description">{description}</span>
    </div>
  );
}
