import React from "react";
import Row from "./Row";
import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />

      <Banner url="https://api.themoviedb.org/3/discover/movie?api_key=af610aa270a31c57fc9857b7e0d5245f&with_genres=28" />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl="https://api.themoviedb.org/3/discover/tv?api_key=af610aa270a31c57fc9857b7e0d5245f&with_networks=213"
        isLargeRow
      />
      <Row
        title="Trending Now"
        fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=af610aa270a31c57fc9857b7e0d5245f&language=en-US"
      />
      <Row
        title="Top Rated"
        fetchUrl=" https://api.themoviedb.org/3/movie/top_rated?api_key=af610aa270a31c57fc9857b7e0d5245f&language=en-US"
      />
      <Row
        title="Action Movies"
        fetchUrl=" https://api.themoviedb.org/3/discover/movie?api_key=af610aa270a31c57fc9857b7e0d5245f&with_genres=28"
      />
      <Row
        title="Comedy Movies"
        fetchUrl=" https://api.themoviedb.org/3/discover/movie?api_key=af610aa270a31c57fc9857b7e0d5245f&with_genres=35"
      />
      <Row
        title="Horror Movies"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=af610aa270a31c57fc9857b7e0d5245f&with_genres=27"
      />
      <Row
        title="Romance Movies"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=af610aa270a31c57fc9857b7e0d5245f&with_genres=10749"
      />
      <Row
        title="Documentaries"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=af610aa270a31c57fc9857b7e0d5245f&with_genres=99"
      />
    </div>
  );
}

export default App;
