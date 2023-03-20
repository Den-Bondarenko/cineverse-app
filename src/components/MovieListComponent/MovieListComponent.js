import React from "react";
import { MovieComponent } from "../MovieComponent/MovieComponent";
import "./MovieListComponent.css"

export const MovieListComponent = ({movies}) => {
    const movieList = movies.map((movie) => <MovieComponent {...movie}/>);
  
    return (
        <div className="movieList">{movieList}</div>
    );
};