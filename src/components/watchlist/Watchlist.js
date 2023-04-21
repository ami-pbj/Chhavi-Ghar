import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import './Watchlist.css';
import { GlobalContext } from "../../GlobalState";
import { Moviecard } from "./Moviecard";

const Watchlist = () => {

  const { watchlist } = useContext(GlobalContext);


  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {

        // console.log(data);

        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };


  return (
    <div className='watchlist'>
      <div className="watchlist__header">
        <h2>Your Watchlist</h2>
        <div className="watched__page">
          <Link to="/watched" className='goback__watchedlist'>
            Watchedlist
          </Link>
          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>
      </div>

      <div className='watchlist__movie__layout'>
        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist?.map((movie) => (
              <Moviecard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h3 className="no-movies">No movies in your watchlist !!<br />Add Now !!</h3>
        )}
      </div>
    </div>
  )
}

export default Watchlist