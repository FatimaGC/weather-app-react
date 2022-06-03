import React from "react";

export default function CurrentWeatherTitle({ searchValue, hasError }) {
  return hasError ? (
    <h2 className="current-weather_title">
      Unable to get data for
      <span className="current-weather_title-location"> {searchValue}</span>
    </h2>
  ) : (
    <h2 className="current-weather_title">
      Today's weather in
      <span className="current-weather_title-location"> {searchValue}</span>
    </h2>
  );
}
