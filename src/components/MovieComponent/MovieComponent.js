import React from "react";
import { urlImg } from "/workspace/cineverse-app/src/api/api-path-img.js";
import "./MovieComponent.css";

export const MovieComponent = ({movie, handleWatchClick, removeWatchedMovie}) => {

    return (
        <div className="card" key={movie.id}>
            <div className="card__info">
                <img className="poster" src={urlImg + movie.poster_path} alt="movie poster" />
                <div className="description">
                    <p>Overwiew: {movie.overview}</p>
                    <p>Rating - {movie.vote_average}</p>
                    <p>Release date: {movie.release_date}</p>
                </div>
            </div>
            <div className="title">
                <p>{movie.title}</p>
            </div>

            <div className="cardControl">
                <button className="addButton" onClick = {() => handleWatchClick(movie)}>Add to Watchlist</button>
                <button className="removeButton" onClick = {() => removeWatchedMovie(movie)}>Remove from Watchlist</button>
            </div>
        </div>
    );
};