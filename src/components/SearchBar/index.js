import React, { useState } from "react";

export default function SearchBar({ onSubmit }) {
  const [searchValue, setSearchValue] = useState("");
  function handleChange(event) {
    setSearchValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(searchValue);
  }
  return (
    <form
      action=""
      id="search-form"
      aria-label="search form"
      onSubmit={handleSubmit}
    >
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">
          Enter a City
        </span>
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          id="search-text-input"
          value={searchValue}
          onChange={handleChange}
        />
        <button
          class="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
          value="Search"
        >
          Search
        </button>
      </div>
    </form>
  );
}
