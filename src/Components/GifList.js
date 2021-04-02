import React from "react";
import Gif from "./Gif";
import NoGifs from "./NoGifs";

const GifList = ({ data }) => {
  return (
    <ul className="gif-list">
      {data.length > 0 ? (
        data.map((data) => <Gif {...data} key={data.id} />)
      ) : (
        <NoGifs />
      )}
    </ul>
  );
};

export default GifList;
