import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const Row = (props) => {
  const [movies, setMovies] = useState([]);

  const base_Url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    // if [], run once when the Row loads and dont run again

    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [props.fetchUrl]);

  console.table(movies);

  return (
    <div className="row">
      <h1>{props.title}</h1>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            className="row_poster"
            key={movie.id}
            src={`${base_Url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
