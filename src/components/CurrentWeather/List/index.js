import React from "react";
import "./styles.css";

export default function CurrentWeatherlist() {
  return (
    <div class="col">
      <ul class="current-weather_list">
        <li>Humidity: 14%</li>
        <li>
          Wind: <span id="wind">13</span>mph
        </li>
      </ul>
    </div>
  );
}
