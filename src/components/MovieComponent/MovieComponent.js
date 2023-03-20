import React from "react";
import { urlImg } from "../../api/api-path-img";
import "./MovieComponent.css";

export const MovieComponent = ({movie, handleFavouritesClick}) => {
    return (
        <div className="card" key={movie.id}>
            <img className="poster" src={urlImg + movie.poster_path} alt="movie poster" />
            <p>{movie.title}</p>
            <p>{movie.release_date}</p>
            <button onClick={() => handleFavouritesClick(movie)}>Favorite</button>
            
        </div>
    );
};