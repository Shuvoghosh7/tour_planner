import React from 'react';
import { Link } from 'react-router-dom';
import './TopDestinations.css'
import America from '../../../images/America.jpg'
import Maldives from '../../../images/Maldives.jpg'
import Africa from '../../../images/Africa.jpg'
import Japan from '../../../images/Japan.png'
import Australia from '../../../images/Australia.png'
import India from '../../../images/india.jpg'
const TopDestinations = () => {
    return (
        <div className='TopDestinations'>
            <h2>Top Destinations</h2>
            <div className='destination-text'>
                <p>Lorem Ipsum is simply dummy text.Lorem Ipsum is simply dummy text.</p>
                <p><Link to="/AllDestinations" className='DestinationsLink'>
                    View All Destinations
                </Link></p>
            </div>

            <div className='destination-countrys'>
                <div className='country'>
                    <img src={America} alt="" />
                    <h4>America</h4>
                </div>
                <div className='country'>
                    <img src={Maldives} alt="" />
                    <h4>America</h4>
                </div>
                <div className='country'>
                    <img src={Africa} alt="" />
                    <h4>America</h4>
                </div>
                <div className='country'>
                    <img src={Japan} alt="" />
                    <h4>Japan</h4>
                </div>
                <div className='country'>
                    <img src={Australia} alt="" />
                    <h4>Australia</h4>
                </div>
                <div className='country'>
                    <img src={India} alt="" />
                    <h4>India</h4>
                </div>
            </div>
            
            
        </div>
    );
};

export default TopDestinations;