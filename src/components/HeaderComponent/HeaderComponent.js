import React from "react";
import { SearchComponent } from "../SearchComponent/SearchComponent";
import "./HeaderComponent.css";



export const HeaderComponent = ({searchMovies, handleCategory}) => {
    

    return(
        <header>
            <div className="header">
                <h1>Cineverse</h1>
                <div className="nav">
                    <button onClick={() => handleCategory("top rated")} className="navButton">Top Rated</button>
                    <button onClick={() => handleCategory("upcoming")} className="navButton">Upcoming</button>
                    <button onClick={() => handleCategory("popular")} className="navButton">Popular</button>
                    <button onClick={() => handleCategory("watchlist")} className="navButton">My Watchlist</button>                
                </div>
                <SearchComponent 
                    searchMovies={searchMovies}
                />
            </div>
        </header>
    );
};

