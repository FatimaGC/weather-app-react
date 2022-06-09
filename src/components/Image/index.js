import React from "react";
import "./styles.css";

export default function Image({ icon, iconDescription }) {
  const imageSource = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <div className="col">
      <img
        src={imageSource}
        alt={iconDescription}
        className="current-weather_image"
        id="icon"
      />
    </div>
  );
}
