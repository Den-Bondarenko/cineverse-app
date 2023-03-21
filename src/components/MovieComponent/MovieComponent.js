import React from "react";
import { urlImg } from "/workspace/cineverse-app/src/api/api-path-img.js";
import "./MovieComponent.css";

export const MovieComponent = ({movie, handleWatchClick}) => {


    return (
        <div className="card" key={movie.id}>
            <img className="poster" src={urlImg + movie.poster_path} alt="movie poster" />
            <p>{movie.title}</p>
            <p>{movie.release_date}</p>
            <div className="cardControl">
                <button className="addButton" onClick={() => handleWatchClick(movie)}>Add to Watchlist</button>
                <button className="removeButton">Remove</button>
            </div>

        </div>
    );
};