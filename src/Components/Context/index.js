// import React from "react";
// import axios from "axios";

// const GifsContext = React.createContext({
//   gifs: [],
//   setGifs: () => {},
// });

// export const GifsProvider = ({ children }) => {
//   const [gifs, setGifs] = React.useState([]);
//   return (
//     <GifsContext.Provider value={{ gifs, setGifs }}>
//       {children}
//     </GifsContext.Provider>
//   );
// };

// export const useGifs = () => {
//   const { gifs, setGifs } = React.useContext(GifsContext);

//   const fetchGifs = React.useCallback(
//     (key, type = "trending") => {
//       axios
//         .get(`https://api.giphy.com/v1/gifs/${type}?api_key=${key}&limit=25`)
//         .then(({ data: { data } }) => setGifs(() => data))
//         .catch((err) =>
//           console.error("Problem fetching and parsing data: ", err.message)
//         );
//     },
//     [setGifs]
//   );
//   return { gifs, fetchGifs };
// };
