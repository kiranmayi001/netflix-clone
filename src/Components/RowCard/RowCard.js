import React,{useState} from 'react'
import axios from 'axios'

function RowCard({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies] =useState([])
    const baseURL = 'https://image.tmdb.org/t/p/original/'


    return (
        <div className="row">
            {title}
<div className="row_poster">
    <img src= "https://image.tmdb.org/t/p/original//4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg" alt/>
</div>
        </div>
    )
}

export default RowCard
