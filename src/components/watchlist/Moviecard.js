import React from "react";
import { Moviecontrols } from "./Moviecontrols.js";
import './Moviecard.css';
import { Link } from "react-router-dom";


export const Moviecard = ({ movie, type }) => {
  return (
    <div className="movie__card">
      <Link to={`/moviedetails/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
        <div className="overlay"></div>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
      </Link>

      <Moviecontrols type={type} movie={movie} />
    </div>
  );
};