import React,{useState,useEffect} from 'react'
import axios from 'axios'

function RowCard({title,isLargeRow,fetchUrl}) {
    const [movies,setMovies] =useState([])
    const baseURL = 'https://image.tmdb.org/t/p/original'
    console.log(fetchUrl)

useEffect(() => {
  async function fetchData(){
      const request = await axios.get("https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213")
        setMovies(request.data.results)   
        console.log(request.data.results)   
        return request;    
  }
  fetchData();
}, [fetchUrl])
    return (
        <div className="row">
            {title}
<div className="row_poster">
    {movies && movies.map(movie=>{
       return <img src= {`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt="originals"
         className = {isLargeRow ? 'row_poster' : 'row_poster_large'}
        />

    })}
</div>
        </div>
    )
}

export default RowCard
