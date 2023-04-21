import React, { useContext } from "react";
import './Watched.css';
import { GlobalContext } from "../../GlobalState";
import { Moviecard } from "./Moviecard";
import { Link } from "react-router-dom";



export const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div className="watchedlist">
      <div className="watchedlist__header">
        <h2>Your Watchedlist</h2>
        <div className="watched__page">
          <Link to="/watchlist" className="goback__watchlist">Watchlist</Link>
          <span className="count-pill">
          {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
        </span>
        </div>

        
      </div>

      <div className="watchedlist__movie__layout">
        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <Moviecard movie={movie} key={movie.id} type="watched" />
            ))}
          </div>
        ) : (
          <h3 className="no-movies">No movies in your watchedlist !!<br />Add Now !!</h3>
        )}
      </div>
    </div>
  );
};