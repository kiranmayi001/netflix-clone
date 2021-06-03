import React,{useState,useEffect} from 'react'
import './Banner.css'
import axios from 'axios'
function Banner() {
    const [movie,setMovie]=useState([])

useEffect(() => {
    async function fetchData(){
        const request = await axios.get("https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213")
          setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)])   
          console.log(request.data.results)   
          return request;    
    }
    fetchData();
}, [])


// to reduce the number of lines in the description
function truncateDescription(str, n){
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
}

    return (
        <div className="banner" 
        style={{backgroundSize:'cover',
                backgroundImage:`url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                backgroundPosition: "center center"}}>
            <div className="banner_content">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className = "banner_buttons">
                    <button className = "banner_button">Play</button>
                    <button className = "banner_button">My List</button>
                </div>
                <h1 className="banner_description">{truncateDescription(movie?.overview,150)}</h1>

            </div>
            <div className="banner_bottomFade"></div>
        </div>
    )
}

export default Banner
