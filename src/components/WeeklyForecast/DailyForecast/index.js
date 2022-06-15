import React from "react";
import Image from "../../Image";
import "./styles.css";

function day(dailyWeatherEntry) {
  if (dailyWeatherEntry?.dt) {
    let date = new Date(dailyWeatherEntry.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];
    return days[day];
  } else {
    return "";
  }
}

export default function DailyForecast({ dailyWeatherEntry }) {
  const weekDay = day(dailyWeatherEntry);
  const icon = dailyWeatherEntry?.weather[0].icon;
  const iconDescription = dailyWeatherEntry?.weather[0].icon;
  const maxTemperature = Math.round(dailyWeatherEntry?.temp.max);
  const minTemperature = Math.round(dailyWeatherEntry?.temp.min);

  return (
    <div className="col">
      <h3>{weekDay}</h3>
      <span>
        <Image icon={icon} iconDescription={iconDescription} />
      </span>
      <p>
        {maxTemperature}° |{" "}
        <span className="weekly-forecast_min_degrees"> {minTemperature}°</span>
      </p>
    </div>
  );
}
