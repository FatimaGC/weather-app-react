import React from "react";
import Image from "CurrentWeather/components/Image";

export default function WeeklyForecast() {
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
            54° | <span class="weekly-forecast_min_degrees">33°</span>
          </p>
        </div>
      </div>
    </div>
  );
}
