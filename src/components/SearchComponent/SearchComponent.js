import React, { useState }from "react";
import { getSearchedMovies } from "../../api/queries";

export const SearchComponent = ({searchMovies}) => {
    const [term, setTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();

        getSearchedMovies(term).then(searchMovies);
    };

    console.log(term);
    return (
        <div className="search">
            <form onSubmit={handleSearch} >
                <input onChange={(e) => setTerm(e.target.value)}/>
                <button>Search</button>
            </form>
        </div>
    );
};