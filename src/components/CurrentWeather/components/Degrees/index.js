import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";

export default function Degrees({ searchValue }) {
  const [temperature, setTemperature] = useState(null);

  const apiKey = "0a4dc3c696be7291e8d469a7dbee552f";

  useEffect(() => {
    if (searchValue) {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${apiKey}&units=imperial&q=${searchValue}`;
      axios.get(apiUrl).then(showTemperature);

      function showTemperature(response) {
        // console.log(response.data);
        setTemperature(Math.round(response.data.main.temp));
      }
    }
  }, [searchValue]);

  return (
    <div class="col">
      <p class="current-weather_degrees" id="current-weather">
        {temperature}°
      </p>
      <span class="current-weather_units">
        <a href="#" id="celsius-link">
          C
        </a>
        |
        <a href="#" id="fahrenheit-link">
          F
        </a>
      </span>
      <span class="current-weather_description">Sunny</span>
    </div>
  );
}
