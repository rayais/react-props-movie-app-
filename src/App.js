import './App.css';
import MovieList from './components/MovieList';
import Nave from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import data1 from './components/Data'
import {  useState } from 'react';


function App() {
  const [sho,setSho]=useState(false)
  console.log(sho)
  const [data,setData]=useState(data1)
 
 
  return (
    sho?(<div className="App" style={{filter:"blur(4px)"}}>
    <Nave setSho={setSho}setData={setData} data={data}/>
    <MovieList movies={data}/>
  </div>)
    :
    (<div className="App">
      <Nave setSho={setSho}setData={setData} data={data}/>
      <MovieList movies={data}/>
    </div>)
    
  );
}

export default App;
