import React, { useState, useEffect } from "react";
import Image from "../Image";
import axios from "axios";

export default function WeeklyForecast({ coordinates }) {
  const [icon, setIcon] = useState("");
  const [iconDescription, setIconDescription] = useState("");
  const [maxTemperature, setMaxTemperature] = useState("");
  const [minTemperature, setMinTemperature] = useState("");

  const apiKey = "0a4dc3c696be7291e8d469a7dbee552f";

  useEffect(() => {
    if (coordinates) {
      const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${apiKey}&units=imperial`;
      axios.get(apiUrl).then(handleSuccess);

      // function showTemperature(response) {
      //   console.log(response.data);
      //   setTemperature(Math.round(response.data.main.temp));
      // }

      function handleSuccess(response) {
        console.log(response);
        setMaxTemperature(Math.round(response.data.daily[0].temp.max));
        setMinTemperature(Math.round(response.data.daily[0].temp.min));
        setIcon(response.data.daily[0].weather[0].icon);
        setIconDescription(response.data.daily[0].weather[0].icon);
      }
    }
  }, [coordinates]);

  return (
    <div>
      <h2 className="weekly-forecast_title">Weekly Forecast</h2>

      <div className="weekly-forecast_container" id="forecast">
        <div className="col">
          <h3>Mon</h3>
          <span className="weather-icon">
            <Image icon={icon} iconDescription={iconDescription} />
          </span>
          <p>
            {maxTemperature}° |{" "}
            <span class="weekly-forecast_min_degrees"> {minTemperature}°</span>
          </p>
        </div>
      </div>
    </div>
  );
}
