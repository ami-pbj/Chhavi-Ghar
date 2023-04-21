import React from "react";
import { Moviecontrols } from "./Moviecontrols.js";
import './Moviecard.css';

export const Moviecard = ({ movie, type }) => {
  return (
    <div className="movie__card">
      <div className="overlay"></div>

      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />

      <Moviecontrols type={type} movie={movie} />
    </div>
  );
};