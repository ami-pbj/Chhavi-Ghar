import React from 'react';
import './MovieData.css';
import Movielist from './Movielist';


const MovieData = () => {
  return (
    <div className="home">
        <h3>Latest Movies</h3>
        <div className="home__row">
                
            <Movielist
                id="4903850"
                title="The Mandalorian (2019)"
                info="U/A 13+ | Sci-Fi & Fantasy, Action & Adventure, Drama"
                price={999.99}
                stock="In Stock"
                nostock=""
                rating={4}
                image="https://www.themoviedb.org/t/p/original/wXDXW4wJnvs5qHEXEZSLtUEzRjX.jpg"
            />

            <Movielist
                id="23445930"
                title="RRR (2022)"
                info="UA | Action, Drama"
                price={1199.99}
                nostock="Out of Stock"
                stock=""
                rating={5}
                image="https://www.themoviedb.org/t/p/original/d3l7kgFJyLTTQSrR4ysCk5yeVyW.jpg"
            />
            <Movielist
                id="49538094"
                title="John Wick: Chapter 4 (2023)"
                info="R | Action, Thriller, Crime"
                price={1999.99}
                stock="In Stock"
                nostock=""
                rating={4}
                image="https://www.themoviedb.org/t/p/original/tnKVQVVZ9BfcJ4JimdqUF3bLr80.jpg"
            />
            
        </div>

        <div className="home__row">

            <Movielist
                id="4903850"
                title="Breaking Bad (2008)"
                info="A | Drama, Crime"
                price={699.99}
                stock="In Stock"
                nostock=""
                rating={4}
                image="https://www.themoviedb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg"
            />
            <Movielist
                id="12321341"
                title="Lucifer (2016)"
                info="U/A 16+ | Crime, Sci-Fi & Fantasy"
                price={999.99}
                nostock="Out of Stock"
                stock=""
                rating={4}
                image="https://www.themoviedb.org/t/p/original/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg"
            />
            
            <Movielist
                id="4903850"
                title="65 (2023)"
                info="PG-13 | Science Fiction, Adventure, Thriller, Action"
                price={599.99}
                nostock="Out of Stock"
                stock=""
                rating={3}
                image="https://www.themoviedb.org/t/p/original/sJtSmrH9soTPw7LU5t2iTcOMCrw.jpg"
            />
            
            <Movielist
                id="3254354345"
                title="Shazam! Fury of the Gods (2023)"
                info="PG-13 | Action, Comedy, Fantasy"
                price={499.99}
                stock="In Stock"
                nostock=""
                rating={3}
                image="https://www.themoviedb.org/t/p/original/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg"
            />
        </div>

        <div className="home__row">
            <Movielist
                id="90829332"
                title="Encanto at the Hollywood Bowl (2022)"
                info="PG | Music"
                price={899.99}
                stock="In Stock"
                nostock=""
                rating={4}
                image="https://www.themoviedb.org/t/p/original/iR16XoukM0bCF2B4KP83a2xghYP.jpg"
            />
        </div>
    </div>
  )
}

export default MovieData