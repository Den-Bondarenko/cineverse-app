import React from "react";
import { MovieComponent } from "../MovieComponent/MovieComponent";
import "./MovieListComponent.css"

export const MovieListComponent = ({movies, handleFavouritesClick}) => {
    const movieList = movies.map((movie) => <MovieComponent movie={movie} handleFavouritesClick={handleFavouritesClick}/>);
  
    return (
        <div className="movieList">{movieList}</div>
    );
};