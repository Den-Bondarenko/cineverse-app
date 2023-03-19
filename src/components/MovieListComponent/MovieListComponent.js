import React from "react";
import { MovieComponent } from "../MovieComponent/MovieComponent";

export const MovieListComponent = ({movies}) => {
    console.log(movies);
    const movieList = movies.map((movie) => <MovieComponent {...movie}/>);
  
    return (
        <div>{movieList}</div>
    );
};