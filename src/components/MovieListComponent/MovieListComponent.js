import React, {useState, useEffect} from "react";
import { MovieCardComponent } from "../MovieCardComponent/MovieCardComponent";
import { getPopularMovies } from "../../api/queries";

export const MovieListComponent = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        getPopularMovies().then(setMovies);
    }, []);

    return (
        <div>
            <MovieCardComponent />
        </div>
    );
};