import React from "react";
import { movies } from "../data";
import Movie from "./Movie"

function Movies() {
  const moviesList=movies.map(movie =>
     <Movie movie={movie} key={movie.name}/>)
  
     
  return(
   <div>
    <h1>Movies Page</h1>
    <div>{moviesList}</div>
  </div>
  );
}

export default Movies;