import React, { useCallback, useState } from "react";
import "./styles.css";
import SiteHeader from "./components/SiteHeader";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeeklyForecast from "./components/WeeklyForecast";

export default function App() {
  const [searchValue, setSearchValue] = useState("Denver");
  const [coordinates, setCoordinates] = useState({});
  function handleSubmit(searchValue) {
    setSearchValue(searchValue);
  }

  const handleCurrentWeatherSuccess = useCallback(
    (response) => {
      setCoordinates({
        latitude: response.data.coord.lat,
        longitude: response.data.coord.lon,
      });
    },
    [setCoordinates]
  );

  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <SiteHeader />
          <SearchBar onSubmit={handleSubmit} />
          <CurrentWeather
            searchValue={searchValue}
            onSuccess={handleCurrentWeatherSuccess}
          />
          <WeeklyForecast coordinates={coordinates} />
          <p>
            <a href="https://github.com/FatimaGC/weather-app-react">
              Open-source code
            </a>{" "}
            by Fatima Guzman
          </p>
        </div>
      </div>
    </div>
  );
}
