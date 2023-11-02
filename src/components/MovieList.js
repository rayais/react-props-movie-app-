import React from 'react'
import Movie_card from './Movie_card'



function MovieList({movies}) {

    
    
  return (
    <>
    
    <div style={{display:"flex",justifyContent: "space-around"}} >
        {movies.map((movie, index)=>
             {return (<Movie_card props={movie} key={index}/>)}
        )}
    </div>
    </>
  )
}

export default MovieList