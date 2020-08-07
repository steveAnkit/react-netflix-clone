import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import axios from "./axios";
import "./Row.css";

const Row = (props) => {
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const [movies, setMovies] = useState([]);
  const [tarilerUrl, setTarilerUrl] = useState("");

  const base_Url = "https://image.tmdb.org/t/p/original/";

  const handleClick = (movie) => {
    console.log(movie);
    if (tarilerUrl) {
      setTarilerUrl("");
    } else {
      movieTrailer(
        movie?.original_name || movie?.name || movie?.original_title || ""
      )
        .then((url) => {
          const urlParam = new URLSearchParams(new URL(url).search);
          console.log("---------------");
          console.log(urlParam);
          setTarilerUrl(urlParam.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    // if [], run once when the Row loads and dont run again

    async function fetchData() {
      const request = await axios.get(props.fetchUrl);

      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [props.fetchUrl]);

  return (
    <div className="row">
      <h1>{props.title}</h1>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            className={`row_poster ${props.isLargeRow && "row_posterLarge"}`}
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={`${base_Url}${
              props.isLargeRow ? movie.poster_path : movie.poster_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>

      {tarilerUrl && <YouTube videoId={tarilerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
