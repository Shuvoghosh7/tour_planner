import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { AiTwotoneStar } from 'react-icons/ai';
import './PopularTours.css'
import Tours1 from '../../images/Tours1.png'
import Tours2 from '../../images/tours2.png'
const PopularTours = () => {
    return (
        <div className='Popular_Tours'>
            <h4>Most Popular Tours</h4>
            <div className='tours'>
                <h4>Lorem Ipsum is simply dummy text.</h4>
                <Link to='/allTours' className='tours-link'>
                    <div className='all-tours'>
                        <p>View All Tours</p>
                        <p className='tours-icon'><BsArrowRight /></p>
                    </div>
                </Link>
            </div>

            <div className='tours-details'>
                <div className='tour1'>
                    <div>
                        <img src={Tours1} alt="" />
                        <h4>Australia</h4>
                        <p>Lorem Ipsum is simply <br /> dummy text.</p>
                    </div>
                </div>
                <div className='tour1'>
                    <img src={Tours2} alt="" />
                    <h4>North Africa</h4>
                    <p>Lorem Ipsum is simply <br /> dummy text.</p>
                </div>
            </div>
        </div>
    );
};

export default PopularTours;