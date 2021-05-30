import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className="banner" 
        style={{backgroundSize:'cover',
                backgroundImage:'url("https://image.tmdb.org/t/p/original//4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg")',
                backgroundPosition: "center center"}}>
            <div className="banner_content">
                <h1 className="banner_title">
                    Title
                </h1>
                <div className = "banner_buttons">
                    <button className = "banner_button">Play</button>
                    <button className = "banner_button">My List</button>
                </div>
                <h1 className="banner_description">My description</h1>

            </div>
            <div className="banner_bottomFade"></div>
        </div>
    )
}

export default Banner
