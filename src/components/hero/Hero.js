import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import MovieData from './MovieData';
import Popular from './popular/Popular';
import TopRated from './toprated/TopRated';
import Upcoming from './upcoming/Upcoming';
import Latest from './latest/Latest';


const Hero = ({movies}) => {

    const navigate = useNavigate();

    function reviews(movieId)
    {
        navigate(`/Reviews/${movieId}`);
    }

  return (
    <div className ='movie-carousel-container'>
      <Carousel>
        {
            movies && movies.length > 0 ?(movies.map((movie) =>{
                return(
                    <Paper key={movie.imdbId}>
                        <div className = 'movie-card-container'>
                            <div className="movie-card" style={{"--img": `url(${movie?.backdrops?.[0]})`}}>
                                <div className="movie-detail">
                                    <div className="movie-poster">

                                        {/* movie poster to movie details */}
                                        <img 
                                            variant ="info"
                                            onClick={() => reviews(movie.imdbId)}
                                            src={movie.poster}
                                            alt=""
                                        />
                                    </div>
                                    <div className="movie-title">
                                        <h4>{movie.title}</h4>
                                    </div>
                                    <div className="movie-buttons-container">
                                        <Link to={`/Trailer/${movie.trailerLink?.substring(movie.trailerLink.length - 11)}`}>
                                            <div className="play-button-icon-container">
                                                <FontAwesomeIcon className="play-button-icon"
                                                    icon = {faCirclePlay}
                                                />
                                            </div>
                                        </Link>

                                        <div className="movie-review-button-container">
                                            <Button variant ="info" onClick={() => reviews(movie.imdbId)}>Reviews</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                );  
            })): <h5 style={{textAlign: 'center'}}>Loading Carousel...</h5>
        }
      </Carousel>


        {/* Movie Details with Watchlist and Booking Button */}
        <div className='movie__data'>
            <MovieData/>
        </div>

        {/* Latest Movie Section  */}
        <div className="latest">
            <Latest />
        </div>

        {/* Popular Movie Section  */}
        <div className="popular">
            <Popular />
        </div>

        {/* Top Rated Movie Section  */}
        <div className="toprated">
            <TopRated />
        </div>

        {/* Upcoming Movie Section  */}
        <div className="upcoming">
            <Upcoming />
        </div>
    </div>

  )
}

export default Hero