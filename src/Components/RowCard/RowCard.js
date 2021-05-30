import React,{useState,useEffect} from 'react'
import axios from 'axios'

function RowCard({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies] =useState([])
    const baseURL = 'https://image.tmdb.org/t/p/original'
    console.log(fetchUrl)

useEffect(() => {
  async function fetchData(){
      const request = await axios.get(fetchUrl)
        // setMovies(request.data.results)   
        console.log(request.data)   
        return request;    
  }
  fetchData();
}, [fetchUrl])
    return (
        <div className="row">
            {title}
<div className="row_poster">
    <img src= "https://image.tmdb.org/t/p/original//4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg" alt="originals"/>
</div>
        </div>
    )
}

export default RowCard
