import React, {useEffect, useState} from 'react';
import './Upcoming.css';
import Cards from "../../cards/Cards"

const Upcoming = () => {


  const [movieList, setMovieList] = useState([])

  useEffect(() => {
      getData()
      window.scrollTo(0,0)
  }, [])

  const getData = () => {
      // https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1
      fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false`)
      .then(res => res.json())
      .then(data => setMovieList(data.results))
  }


  return (
    <div className='upcoming'>
        <div className="upcoming__layout">
            <h3>Upcoming Movies</h3>
            <div className="list__cards">
                {
                    movieList?.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
        
    </div>
  )
}

export default Upcoming

