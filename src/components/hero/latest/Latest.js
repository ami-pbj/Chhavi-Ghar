import React, {useEffect, useState} from 'react';
import './Latest.css';
import Cards from "../../cards/Cards"

const Latest = () => {


  const [movieList, setMovieList] = useState([])

  useEffect(() => {
      getData()
      window.scrollTo(0,0)
  }, [])

  const getData = () => {
      // https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US
      fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`)
      .then(res => res.json())
      .then(data => setMovieList(data.results))
  }


  return (
    <div className='latest'>
        <div className="latest__layout">
            <h3>Latest Movies</h3>
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

export default Latest

