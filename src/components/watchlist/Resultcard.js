import React, { useContext } from 'react';
import Moment from "react-moment";
import './Resultcard.css';
import { GlobalContext } from '../../GlobalState';


const Resultcard = ({movie}) => {


    const {
        addMovieToWatchlist,
        addMovieToWatched,
        watchlist,
        watched,
      } = useContext(GlobalContext);
    
      let storedMovie = watchlist.find((o) => o.id === movie.id);
      let storedMovieWatched = watched.find((o) => o.id === movie.id);
    
      const watchlistDisabled = storedMovie
        ? true
        : storedMovieWatched
        ? true
        : false;
    
      const watchedDisabled = storedMovieWatched ? true : false;
    

  return (
    <div className='result__card'>
      <div className="poster__wrapper">
          {movie.poster_path ? (
          <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={`${movie.title} Poster`}
          />
          ) : (
          <div className="filler__poster">
              <small>Poster isn't Available!</small>
          </div>
          )}
      </div>

      <div className="result__card__info">
        <div className="result__card__header">
            <h3>{movie.title}</h3>
            <h5>
                <Moment format="YYYY">{movie.release_date ? movie.release_date.substring(0, 4) : "_"}</Moment>
            </h5>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to Watchlist
          </button>

          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watchedlist
          </button>
        </div>
      </div>
    </div>
  )
}

export default Resultcard