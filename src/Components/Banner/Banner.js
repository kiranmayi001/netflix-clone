import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className="banner" 
        style={{backgroundSize:'cover',
                backgroundImage:'url("")',
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
