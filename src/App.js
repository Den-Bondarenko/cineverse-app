import React, {useState, useEffect} from 'react';
import './App.css';
import { HeaderComponent } from './components/HeaderComponent/HeaderComponent';
import { MovieSectionComponent } from './components/MovieSectionComponent/MovieSectionComponent';
import { getMovies } from './api/queries';
import { getPopularMovies } from './api/queries';
import { getTopRatedMovies } from './api/queries';
import { getUpcomingMovies } from './api/queries';

function App() {
  const [movies, setMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [category, setCategory] = useState("");
  const [currentCategory, setCurrentCategory] = useState([]);

  
  useEffect(() =>{
    getMovies().then(setMovies);
  }, []);

  const searchMovies = (movies) => {
    setMovies(movies);
  };

  const addWatchedeMovie = (movie) => {
    if(!watchedMovies.includes(movie)){
      setWatchedMovies([...watchedMovies, movie]);
    };
  };

  const handleCategory = (category) => {
      setCategory(category);
  };

  if (currentCategory !== category) {
    switch (category) {
      case "popular":
        getPopularMovies().then(setMovies);
        setCurrentCategory(category);
        break;
      case "top rated":
        getTopRatedMovies().then(setMovies);
        setCurrentCategory(category);
        break;
      case "upcoming":
        getUpcomingMovies().then(setMovies);
        setCurrentCategory(category);
        break;
      case "watchlist":
        setMovies(watchedMovies);
        setCurrentCategory(category);
        break;
      default:
        break;
    };
  };
  

  return (
    <div className="App">
      <HeaderComponent  
        searchMovies = {searchMovies}
        handleCategory = {handleCategory}
      />
      <MovieSectionComponent 
        movies = {movies}
        handleWatchClick = {addWatchedeMovie}
      />
    </div>
  );
}

export default App;
