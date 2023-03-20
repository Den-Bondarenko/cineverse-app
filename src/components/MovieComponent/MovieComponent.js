import React from "react";
import { urlImg } from "../../api/api-path-img";
import "./MovieComponent.css";

export const MovieComponent = (movie) => {
    return (
        <div className="card">
            <img className="poster" src={urlImg + movie.poster_path} alt="movie poster" />
            {movie.title}
        </div>
    );
};