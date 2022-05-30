import React from "react";

export default function CurrentWeatherTitle({ searchValue }) {
  return (
    <h2 class="current-weather_title">
      Today's weather in
      <span class="current-weather_title-location"> {searchValue}</span>
    </h2>
  );
}
