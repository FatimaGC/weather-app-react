import React, { useState } from "react";
import "./styles.css";
import SiteHeader from "./components/SiteHeader";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  function handleSubmit(searchValue) {
    setSearchValue(searchValue);
  }
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <SiteHeader />
          <SearchBar onSubmit={handleSubmit} />
          <CurrentWeather searchValue={searchValue} />
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
