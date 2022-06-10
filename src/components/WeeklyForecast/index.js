import React, { useState, useEffect } from "react";
import Image from "../Image";
import axios from "axios";

export default function WeeklyForecast({ coordinates }) {
  const [weekDay, setWeekDay] = useState("");
  const [icon, setIcon] = useState("");
  const [iconDescription, setIconDescription] = useState("");
  const [maxTemperature, setMaxTemperature] = useState("");
  const [minTemperature, setMinTemperature] = useState("");

  const apiKey = "0a4dc3c696be7291e8d469a7dbee552f";

  useEffect(() => {
    if (coordinates) {
      const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${apiKey}&units=imperial`;
      axios.get(apiUrl).then(handleSuccess);

      function handleSuccess(response) {
        console.log(response);
        function day() {
          let date = new Date(response.data.daily[0].dt * 1000);
          let day = date.getDay();
          let days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];
          return days[day];
        }
        setWeekDay(day);
        setIcon(response.data.daily[0].weather[0].icon);
        setIconDescription(response.data.daily[0].weather[0].icon);
        setMaxTemperature(Math.round(response.data.daily[0].temp.max));
        setMinTemperature(Math.round(response.data.daily[0].temp.min));
      }
    }
  }, [coordinates]);

  return (
    <div>
      <h2 className="weekly-forecast_title">Weekly Forecast</h2>

      <div className="weekly-forecast_container" id="forecast">
        <div className="col">
          <h3>{weekDay}</h3>
          <span className="weather-icon">
            <Image icon={icon} iconDescription={iconDescription} />
          </span>
          <p>
            {maxTemperature}° |{" "}
            <span className="weekly-forecast_min_degrees">
              {" "}
              {minTemperature}°
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
