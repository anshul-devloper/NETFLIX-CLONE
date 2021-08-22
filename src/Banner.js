import React, { useState, useEffect } from "react";
import "./Banner.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Banner({ url }) {
  const [movies, setMovies] = useState([]);

  const get = async () => {
    const response = await fetch(url);
    const ans = await response.json();
    setMovies(ans.results[Math.floor(Math.random() * ans.results.length - 1)]);
  };

  useEffect(() => {
    get();
  }, [url]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${base_url}${movies?.backdrop_path}")`,
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movies?.title ||
            movies?.name ||
            movies?.original_name ||
            movies?.original_title}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_discription">
          {truncate(movies?.overview, 150)}
        </h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  );
}

export default Banner;
