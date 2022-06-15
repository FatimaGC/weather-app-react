import React, { useState, useEffect } from "react";
import DailyForecast from "./DailyForecast";
import "./styles.css";
import axios from "axios";

export default function WeeklyForecast({ coordinates }) {
  const [dailyWeatherData, setdailyWeatherData] = useState([]);
  // const [hasError, setHasError] = useState(false);

  const apiKey = "59240eed9f081fcf80eb628fd9cea464";

  useEffect(() => {
    if (coordinates.latitude && coordinates.longitude) {
      const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${apiKey}&units=imperial`;
      axios.get(apiUrl).then(handleSuccess);

      function handleSuccess(response) {
        setdailyWeatherData(response.data.daily);
        console.log(response.data.daily);
      }
    }
  }, [coordinates]);

  return (
    <div>
      <h2 className="weekly-forecast_title">Weekly Forecast</h2>

      <div className="weekly-forecast_container">
        {/* <div className="row align-items-center"> */}
        <ul className="weekly-forecast_list container align-items-center">
          {dailyWeatherData.map((dailyWeatherEntry, index) => (
            <li key={index}>
              <DailyForecast dailyWeatherEntry={dailyWeatherEntry} />
            </li>
          ))}
        </ul>
        {/* </div> */}
      </div>
    </div>
  );
}
