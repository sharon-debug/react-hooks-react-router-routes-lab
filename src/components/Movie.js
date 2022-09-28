import React from "react";

function Movie ({movie}){
    const movieGenres = movie.genres.map(genre =>
        <li key="{genre}">{genre}</li>)
    return(
        <div>
      <h3>{movie.title}</h3>
      <h3>{movie.time}</h3>
      <ul>
        {movieGenres}
      </ul>
      </div>)
    
}
export default Movie;