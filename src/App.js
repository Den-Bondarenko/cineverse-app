import React, {useState, useEffect} from 'react';
import './App.css';
import { HeaderComponent } from './components/HeaderComponent/HeaderComponent';
import { MovieSectionComponent } from './components/MovieSectionComponent/MovieSectionComponent';
import { getPopularMovies } from './api/queries';

function App() {
  const [movies, setMovies] = useState([]);
  

  useEffect(() =>{

    getPopularMovies(setMovies).then();
    console.log(movies);
  }, []);

  console.log(movies);

  return (
    <div className="App">
      <HeaderComponent {...setMovies}/>
      <MovieSectionComponent movies={movies}/>
    </div>
  );
}

export default App;
