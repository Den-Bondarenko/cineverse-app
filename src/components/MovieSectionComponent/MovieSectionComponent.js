import React, {useState, useEffect} from "react";
import { MovieListComponent } from "../MovieListComponent/MovieListComponent";
import { getPopularMovies } from "../../api/queries";

export const MovieSectionComponent = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        getPopularMovies(setMovies);
    }, []);

    console.log(movies)
    

    return (
        <div><MovieListComponent movies={movies}/></div>
    );
};