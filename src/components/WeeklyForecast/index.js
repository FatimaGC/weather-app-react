import React, { useState, useEffect } from "react";
import DailyForecast from "./DailyForecast";
import axios from "axios";

export default function WeeklyForecast({ coordinates }) {
  const [dailyWeatherData, setdailyWeatherData] = useState([]);
  // const [hasError, setHasError] = useState(false);

  const apiKey = "0a4dc3c696be7291e8d469a7dbee552f";

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
    <>
      <h2 className="weekly-forecast_title">Weekly Forecast</h2>

      <ul>
        {dailyWeatherData.map((dailyWeatherEntry) => (
          <li key={dailyWeatherEntry.dt}>
            <DailyForecast dailyWeatherEntry={dailyWeatherEntry} />
          </li>
        ))}
      </ul>
    </>
  );
}
