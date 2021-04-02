import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SearchForm from "./Components/SearchForm";
import GifList from "./Components/GifList";
import key from "./key";

const App = () => {
  const [gifs, setGifs] = useState([]);

  const handleSearchGifs = (searchType = "trending", searchText = "") => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/${searchType}?q=${searchText}&api_key=${key}&limit=25`
      )
      .then(({ data: { data } }) => setGifs(() => data))
      .catch((err) =>
        console.error("Problem fetching and parsing data: ", err.message)
      );
  };

  useEffect(handleSearchGifs, []);

  return (
    <div>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm searchGifs={handleSearchGifs} />
        </div>
      </div>
      <div className="main-content">
        <GifList data={gifs} />
      </div>
    </div>
  );
};

export default App;
