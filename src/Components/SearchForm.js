import React, { Component, useState } from "react";

const SearchForm = ({ searchGifs }) => {
  const [searchText, setSearch] = useState("");

  const onSearchChange = (e) => {
    setSearch(() => e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchGifs("search", searchText);
    e.currentTarget.reset();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="is-hidden" htmlFor="search">
        Search
      </label>
      <input
        type="search"
        onChange={onSearchChange}
        name="search"
        placeholder="Search..."
      />
      <button type="submit" id="submit" className="search-button">
        <i className="material-icons icn-search">search</i>
      </button>
    </form>
  );
};

export default SearchForm;
