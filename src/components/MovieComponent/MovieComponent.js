import React from "react";
import { urlImg } from "../../api/api-path-img";

export const MovieComponent = (movie) => {
    return (
        <div>
            <img src={urlImg + movie.poster_path} alt="movie poster" />
            {movie.title}
        </div>
    );
};