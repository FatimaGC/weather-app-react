import React from "react";
import DateTimeDisplay from "../DateTimeDisplay/index";
import "./styles.css";

export default function SiteHeader() {
  return (
    <header className="row justify-content-between">
      <div className="col-4">
        <h1 className="header-title">Weather Forecaster</h1>
      </div>

      <div className="col-4">
        <DateTimeDisplay />
      </div>
    </header>
  );
}
