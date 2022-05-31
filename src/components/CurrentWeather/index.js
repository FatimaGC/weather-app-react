import React from "react";
import "./styles.css";
import Title from "./components/Title";
import Image from "./components/Image";
import Degrees from "./components/Degrees";
import List from "./components/List";

export default function CurrentWeather({ searchValue }) {
  return (
    <section class="current-weather_container row align-items-center">
      <Title searchValue={searchValue} />
      <Image />
      <Degrees searchValue={searchValue} />
      <List />
    </section>
  );
}
