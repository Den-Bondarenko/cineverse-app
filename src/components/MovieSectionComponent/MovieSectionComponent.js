import React from "react";
import { MovieListComponent } from "../MovieListComponent/MovieListComponent";

export const MovieSectionComponent = ({movies, handleFavouritesClick}) => {

    return (
        <div className="movieSection">
            <MovieListComponent 
                movies={movies} 
                handleFavouritesClick = {handleFavouritesClick}
            />
        </div>
    );
};