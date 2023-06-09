import React from "react";
import { MovieListComponent } from "../MovieListComponent/MovieListComponent";

export const MovieSectionComponent = ({movies, handleWatchClick, removeWatchedMovie}) => {

    return (
        <div className="movieSection">
            <MovieListComponent 
                movies={movies} 
                handleWatchClick = {handleWatchClick}
                removeWatchedMovie = {removeWatchedMovie}
            />
        </div>
    );
};