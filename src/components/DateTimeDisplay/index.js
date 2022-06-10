import React, { useState } from "react";

export default function DateTimeDisplay() {
  // const [dateTime, setDateTime] = useState("Loading...");

  let dateTime = "";

  function updateDate(date) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const currentDate = new Date();

    const day = days[currentDate.getDay()];

    let hours = currentDate.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }

    let minutes = currentDate.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    const formatedDate = `${day} ${hours}: ${minutes}`;

    return formatedDate;
  }
  return (
    <p>
      <time id="date">{updateDate(dateTime)}</time>
    </p>
  );
}
