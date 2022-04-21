import React from 'react';
import './Destinations.css'
import photo1 from '../../assets/photo6.jpg'
import photo2 from '../../assets/photo2.jpg'
import photo3 from '../../assets/photo3.jpg'
import photo4 from '../../assets/photo4.jpg'
import photo5 from '../../assets/photo5.jpg'

const Destinations = () => {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1>All Resorts</h1>
                <p>Only The Best Places</p>
                <div className='imgContainer'>
                    <img className='span3 span2' src={photo4} alt="beach"/>
                    <img src={photo2} alt="beach"/>
                    <img src={photo3} alt="beach"/>
                    <img src={photo1} alt="beach"/>
                    <img src={photo5} alt="beach"/>

                </div>
            </div>
        </div>
    );
};

export default Destinations;