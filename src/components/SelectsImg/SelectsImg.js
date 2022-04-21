import React from 'react';
import './SelectsImg.css'
const SelectsImg = ({image, text}) => {
    return (
        <div className='selectsLocation'>
            <img src={image} alt="img"/>
            <div className="overlay">
                <p>{text}</p>
            </div>
        </div>
    );
};

export default SelectsImg;