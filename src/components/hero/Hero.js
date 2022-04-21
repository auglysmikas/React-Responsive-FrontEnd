import React from 'react';
import './Hero.css'

import Video from '../../assets/maldivesVideo.mp4'

const Hero = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted
                   className='video'
                   type='video/mp4'
                   src={Video}>
            </video>
            <div className="overlay"/>
            <div className="content">
                <h1>First Class Travel</h1>
                <h2>Top Locations Worldwide</h2>
                <form className="form">

                    <div>
                        <input type="text" placeholder='Search Destinations'/>
                    </div>
                    <div>
                        <button>Search</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Hero;