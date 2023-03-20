import React from "react";
import { SearchComponent } from "../SearchComponent/SearchComponent";
import "./HeaderComponent.css";



export const HeaderComponent = ({searchMovies}) => {
    
    return(
        <header>
            <div className="header">
                <h1>Cineverse</h1>
                <button>Favourite</button>
                <SearchComponent searchMovies={searchMovies}/>
            </div>
        </header>
    );
};

