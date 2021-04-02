import React from "react";

const Gif = ({
  title,
  images: {
    fixed_height: { url },
  },
}) => (
  <li className="gif-wrap">
    <img src={url} alt={title} />
  </li>
);

export default Gif;
