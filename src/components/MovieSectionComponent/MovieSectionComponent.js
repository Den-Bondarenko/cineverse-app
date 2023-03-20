import React from "react";
import { MovieListComponent } from "../MovieListComponent/MovieListComponent";

export const MovieSectionComponent = ({movies}) => {

    return (
        <div><MovieListComponent movies={movies}/></div>
    );
};