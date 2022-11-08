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
                <div className='country1'>
                    <p className='countryName1'>America</p> 
                </div>
                <div className='country2'>
                    <p className='countryName2'>Maldives</p>
                </div>
                <div className='country3'>
                    <p className='countryName3'>Africa</p> 
                </div>
                <div className='country4'>
                    <p className='countryName4'>Japan</p> 
                </div>
                <div className='country5'>
                    <p className='countryName5'>Australia</p> 
                </div>
                <div className='country6'>
                    <p className='countryName6'>India</p> 
                </div>
                
            </div>
            
            
        </div>
    );
};

export default TopDestinations;