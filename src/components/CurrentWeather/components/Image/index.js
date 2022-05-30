import React from "react";
import "./styles.css";

export default function CurrentWeatherImage() {
  return (
    <div class="col">
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        alt="Sunny"
        class="current-weather_image"
        id="icon"
      />
    </div>
  );
}
