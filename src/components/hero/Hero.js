import './Hero.css';
import Movielist from './Movielist';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';


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
            movies?.map((movie) =>{
                return(
                    <Paper key={movie.imdbId}>
                        <div className = 'movie-card-container'>
                            <div className="movie-card" style={{"--img": `url(${movie.backdrops[0]})`}}>
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
                                        <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
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
                )  
            })
        }
      </Carousel>



        {/* Movie Details with Watchlist and Booking Button */}
        <div className=''>
            <div className="home__row">
                
                <Movielist
                    id="4903850"
                    title="The Mandalorian (2019)"
                    info="U/A 13+ | Sci-Fi & Fantasy, Action & Adventure, Drama"
                    price={199.99}
                    stock="In Stock"
                    rating={4}
                    image="https://www.themoviedb.org/t/p/original/wXDXW4wJnvs5qHEXEZSLtUEzRjX.jpg"
                />

                <Movielist
                    id="23445930"
                    title="RRR (2022)"
                    info="UA | Action, Drama"
                    price={98.99}
                    nostock="Out of Stock"
                    rating={5}
                    image="https://www.themoviedb.org/t/p/original/d3l7kgFJyLTTQSrR4ysCk5yeVyW.jpg"
                />
                <Movielist
                    id="49538094"
                    title="John Wick: Chapter 4 (2023)"
                    info="R | Action, Thriller, Crime"
                    price={239.0}
                    stock="In Stock"
                    rating={4}
                    image="https://www.themoviedb.org/t/p/original/tnKVQVVZ9BfcJ4JimdqUF3bLr80.jpg"
                />
                
                </div>

                <div className="home__row">

                <Movielist
                    id="4903850"
                    title="Breaking Bad (2008)"
                    info="A | Drama, Crime"
                    price={199.99}
                    stock="In Stock"
                    rating={4}
                    image="https://www.themoviedb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg"
                />
                <Movielist
                    id="12321341"
                    title="Lucifer (2016)"
                    info="U/A 16+ | Crime, Sci-Fi & Fantasy"
                    price={11.96}
                    nostock="Out of Stock"
                    rating={4}
                    image="https://www.themoviedb.org/t/p/original/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg"
                />
                
                <Movielist
                    id="4903850"
                    title="65 (2023)"
                    info="PG-13 | Science Fiction, Adventure, Thriller, Action"
                    price={199.99}
                    nostock="Out of Stock"
                    rating={3}
                    image="https://www.themoviedb.org/t/p/original/sJtSmrH9soTPw7LU5t2iTcOMCrw.jpg"
                />
                
                <Movielist
                    id="3254354345"
                    title="Shazam! Fury of the Gods (2023)"
                    info="PG-13 | Action, Comedy, Fantasy"
                    price={598.99}
                    stock="In Stock"
                    rating={3}
                    image="https://www.themoviedb.org/t/p/original/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg"
                />
                </div>

                <div className="home__row">
                <Movielist
                    id="90829332"
                    title="Encanto at the Hollywood Bowl (2022)"
                    info="PG | Music"
                    price={1094.98}
                    stock="In Stock"
                    rating={4}
                    image="https://www.themoviedb.org/t/p/original/iR16XoukM0bCF2B4KP83a2xghYP.jpg"
                />
            </div>
        </div>
    </div>

  )
}

export default Hero