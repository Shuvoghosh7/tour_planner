import React from 'react';
import './Brand.css'
import demos from '../../../images/Brand/demos.png'
import demosite from '../../../images/Brand/demositepng.png'
import Demostports from '../../../images/Brand/Demostports.png'
const Brand = () => {
    return (
        <div className='brand'>
            <div className='brand-name'>
                <p>Our Partners</p>
                <img src={demos} alt="" />
                <img src={demosite} alt="" />
                <img src={Demostports} alt="" />
            </div>

        </div>
    );
};

export default Brand;