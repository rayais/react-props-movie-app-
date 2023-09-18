import './App.css';
import MovieList from './components/MovieList';
import Nave from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './components/Data'
function App() {
  console.log(data)
  return (
    <div className="App">
      <Nave/>
      <MovieList movies={data}/>
    </div>
  );
}

export default App;
