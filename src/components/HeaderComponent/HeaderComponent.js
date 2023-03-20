import React from "react";
import { SearchComponent } from "../SearchComponent/SearchComponent";
import "./HeaderComponent.css";



export const HeaderComponent = (setMovies) => {
    
    return(
        <header>
            <div className="header">
                <h1>Cineverse</h1>
                <SearchComponent {...setMovies} />
            </div>
        </header>
    );
};

