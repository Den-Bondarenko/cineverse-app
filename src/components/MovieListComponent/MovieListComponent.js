import React from "react";
import { MovieComponent } from "../MovieComponent/MovieComponent";
import "./MovieListComponent.css"

export const MovieListComponent = ({movies, handleWatchClick}) => {

    const movieList = movies.map((movie) => <MovieComponent movie={movie} handleWatchClick={handleWatchClick}/>);
    return (
        <div className="movieList">{movieList}</div>
    );
};