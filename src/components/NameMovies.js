import React from "react";

function NameMovies(props){
    const myVar = props.actor || props.director

    const movies = myVar.movies.map(movie =>
        <li key={movie}>{movie}</li>)
        
    return(
        <div>
        <h3> {myVar.name} </h3>
         <ul>{movies}</ul>
       </div>

      )

}


export default NameMovies;