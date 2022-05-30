import React from "react";
import DateTimeDisplay from "../DateTimeDisplay/index";
import "./styles.css";

export default function SiteHeader() {
  return (
    <header class="row justify-content-between">
      <div class="col-4">
        <h1 class="header-title">Weather Forecaster</h1>
      </div>

      <div class="col-4">
        <p>
          <DateTimeDisplay />
        </p>
      </div>
    </header>
  );
}
