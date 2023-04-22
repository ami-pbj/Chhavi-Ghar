import React, { useState } from "react";
import './MovieDetailPage.css';
import Movie from "./MovieDetails";



export const MovieDetailPage = () => {


  return (
    <div className="movie__detail__page">
      <div className="movie__detail__page__header">
        <h2>Movie Details</h2>
      </div>

      <div className="movie__detail__page__layout">
        <Movie/>
      </div>
    </div>
  );
};