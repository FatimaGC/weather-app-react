import React from "react";
import "./styles.css";

export default function CurrentWeatherlist({ humidity, wind }) {
  return (
    <div className="col">
      <ul className="current-weather_list">
        <li>Humidity: {humidity}%</li>
        <li>
          Wind: <span id="wind">{wind}</span>mph
        </li>
      </ul>
    </div>
  );
}
