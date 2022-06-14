import React, { useState, useEffect } from "react";
import "./styles.css";
import Title from "./components/Title";
import Image from "../Image";
import Degrees from "./components/Degrees";
import List from "./components/List";
import axios from "axios";

export default function CurrentWeather({ searchValue, onSuccess }) {
  const [temperature, setTemperature] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [icon, setIcon] = useState("");
  const [iconDescription, setIconDescription] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");

  const apiKey = "59240eed9f081fcf80eb628fd9cea464";

  useEffect(() => {
    if (searchValue) {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}&units=imperial&q=${searchValue}`;
      axios.get(apiUrl).then(handleSuccess).catch(handleFailure);

      function showTemperature(response) {
        // console.log(response.data);
        setTemperature(Math.round(response.data.main.temp));
      }
      function handleSuccess(response) {
        showTemperature(response);
        setHasError(false);
        setIcon(response.data.weather[0].icon);
        setIconDescription(response.data.weather[0].description);
        setDescription(response.data.weather[0].main);
        setHumidity(response.data.main.humidity);
        setWind(response.data.wind.speed);
        onSuccess(response);
      }

      function handleFailure() {
        setHasError(true);
      }
    }
  }, [searchValue, onSuccess]);

  return (
    <section className="current-weather_container row align-items-center">
      <Title hasError={hasError} searchValue={searchValue} />
      <Image icon={icon} iconDescription={iconDescription} />
      <Degrees description={description} temperature={temperature} />
      <List wind={wind} humidity={humidity} />
    </section>
  );
}
