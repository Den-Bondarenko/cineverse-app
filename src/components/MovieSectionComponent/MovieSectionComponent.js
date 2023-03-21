import React from "react";
import { MovieListComponent } from "../MovieListComponent/MovieListComponent";

export const MovieSectionComponent = ({movies, handleWatchClick}) => {

    return (
        <div className="movieSection">
            <MovieListComponent 
                movies={movies} 
                handleWatchClick = {handleWatchClick}
            />
        </div>
    );
};