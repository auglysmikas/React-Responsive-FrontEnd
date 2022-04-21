import React from 'react';
import photo1 from '../../assets/photo6.jpg'
import photo2 from '../../assets/photo2.jpg'
import photo3 from '../../assets/photo3.jpg'
import photo4 from '../../assets/photo4.jpg'
import photo5 from '../../assets/photo5.jpg'
import photo7 from '../../assets/photo7.jpg'


import './Selects.css'
import SelectsImg from "../SelectsImg/SelectsImg";

const Selects = () => {
    return (
        <div name='views' className='selects'>
            <div className="container">
                <SelectsImg image={photo2} text='Palanga'/>
                <SelectsImg image={photo1} text='Nida'/>
                <SelectsImg image={photo3} text='Maldives'/>
                <SelectsImg image={photo4} text='Druskininkai'/>
                <SelectsImg image={photo5} text='Bora Bora'/>
                <SelectsImg image={photo7} text='Tailand'/>

            </div>

        </div>
    );
};

export default Selects;