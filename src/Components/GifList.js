import React from "react";
import Gif from "./Gif";

const GifList = ({ data }) => {
  return (
    <ul className="gif-list">
      {data.map((data) => (
        <Gif {...data} key={data.id} />
      ))}
    </ul>
  );
};

export default GifList;
