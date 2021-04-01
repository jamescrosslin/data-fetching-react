import React, { Component, useEffect, useState } from "react";
import "./App.css";
import SearchForm from "./Components/SearchForm";
import GifList from "./Components/GifList";

export default () => {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {});
  return (
    <div>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm />
        </div>
      </div>
      <div className="main-content">
        <GifList />
      </div>
    </div>
  );
};
