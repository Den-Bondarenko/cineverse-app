import './App.css';
import { HeaderComponent } from './components/HeaderComponent/HeaderComponent';
import { MovieListComponent } from './components/MovieListComponent/MovieListComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <MovieListComponent />
    </div>
  );
}

export default App;
