import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SearchForm from "./Components/SearchForm";
import GifList from "./Components/GifList";
import key from "./key";

export default () => {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=25`)
      .then(({ data: { data } }) => setGifs(() => data))
      .catch((err) =>
        console.error("Problem fetching and parsing data: ", err.message)
      );
  }, []);
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
