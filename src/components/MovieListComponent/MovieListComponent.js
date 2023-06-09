import React from "react";
import { MovieComponent } from "../MovieComponent/MovieComponent";
import "./MovieListComponent.css"

export const MovieListComponent = ({movies, handleWatchClick, removeWatchedMovie}) => {

    const movieList = movies.map((movie) => <MovieComponent movie={movie} handleWatchClick={handleWatchClick} removeWatchedMovie = {removeWatchedMovie}/>);
    return (
        <div className="movieList">{movieList}</div>
    );
};