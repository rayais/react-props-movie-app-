import React from 'react'
import Movie_card from './Movie_card'
//import Movie_card from './Movie_card'


function MovieList({movies}) {
    console.log(movies)
    
  return (
    <div style={{display:"flex",justifyContent: "space-around"}} >
        {movies.map(movie=>
             <Movie_card props={movie}/>
        )}
    </div>
  )
}

export default MovieList