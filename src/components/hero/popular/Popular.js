import React, {useEffect, useState} from "react"
import "./Popular.css"
import { useParams } from "react-router-dom"
import Cards from "../../cards/Cards"

// const MovieList = () => {
    
//     const [movieList, setMovieList] = useState([])
//     const {type} = useParams()

//     useEffect(() => {
//         getData()
//     }, [])

//     useEffect(() => {
//         getData()
//     }, [type])

//     const getData = () => {
//         // https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
//         fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false`)
//         .then(res => res.json())
//         .then(data => setMovieList(data.results))
//     }

//     return (
//         <div className="movie__list">
//             <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
//             <div className="list__cards">
//                 {
//                     movieList.map(movie => (
//                         <Cards movie={movie} />
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }

// export default MovieList





const Popular = () => {

    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        // https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }


  return (
    <div className='popular'>
        <div className="popular__layout">
            <h3>Popular Movies</h3>
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

export default Popular


