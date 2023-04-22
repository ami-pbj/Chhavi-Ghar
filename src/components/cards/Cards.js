import React, {useEffect, useState} from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import "./Cards.css";
import { Link } from "react-router-dom";

const Cards = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

    return <>
    {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme baseColor="#313131" highlightColor="#525252">
                <Skeleton height={230} width={160} duration={1.5} count={1} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/moviedetails/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                <div className="cards__overlay">
                    <div className="cards__title">{movie?movie.original_title:""}</div>
                    <div className="cards__runtime">
                        {movie?movie.release_date:""}
                        <span className="cards__rating">{movie?movie.vote_average:""}🌟</span>
                    </div>
                    <div className="cards__description">{movie?movie.overview.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>
    }
    </>
}

export default Cards