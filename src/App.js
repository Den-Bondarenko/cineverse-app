import React, {useState, useEffect} from 'react';
import './App.css';
import { HeaderComponent } from './components/HeaderComponent/HeaderComponent';
import { MovieSectionComponent } from './components/MovieSectionComponent/MovieSectionComponent';
import { getPopularMovies } from './api/queries';

function App() {
  const [movies, setMovies] = useState([]);
  const [favoruites, setFavourites] = useState([]);
  console.log(favoruites);
  

  useEffect(() =>{
    getPopularMovies().then(setMovies);
  }, []);

  const searchMovies = (movies) => {
    setMovies(movies);
  };

  const addFavouriteMovie = (movie) => {
    const newFavourites = [...favoruites, movie];
    setFavourites(newFavourites);
  };

  return (
    <div className="App">
      <HeaderComponent  searchMovies = {searchMovies}/>
      <MovieSectionComponent 
        movies={movies}
        handleFavouritesClick = {addFavouriteMovie}
      />
      <MovieSectionComponent 
        movies={favoruites}
        handleFavouritesClick = {addFavouriteMovie}
      />
    </div>
  );
}

export default App;
