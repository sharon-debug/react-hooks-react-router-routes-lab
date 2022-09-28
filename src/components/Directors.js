import React from "react";
import { directors } from "../data";
import NameMovies from "./NameMovies";

function Directors() {
  const directorsList= directors.map(director => 
    <NameMovies key={director.name}
     director={director}/>)
  return <div>
    <h1>Directors Page</h1>
    <ul>{directorsList}</ul>
  </div>;
}

export default Directors;