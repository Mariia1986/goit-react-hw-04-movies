import React from "react"



const FilmDetails=({filmDetail})=>{
    const{title,backdrop_path, overview, genres}=filmDetail
   return(
    <div>
                  
    <h2>{title}</h2>
    <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={title}/>
    <h3>Owerview</h3>
    <p>{overview}</p>
    <h3>Genres</h3>
    <ul>
         {genres && genres.map(({id, name})=><li key={id}>{name}</li>)}
    </ul>
</div>
   )
}

export default FilmDetails