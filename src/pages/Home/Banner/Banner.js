import React from 'react';
import './Banner.css'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Banner = () => {
    return (
        <div className="banner-content">
            <div className="banner">
                <div className="inside-banner">
                    <div className='inside-banner-menu'>
                        <div className='inside-banner-top'>
                            <p>Support</p>
                            <p>USD</p>
                            <p>EN</p>
                        </div>
                        <div className='nside-banner-Login'>
                            <p><span>Sign Up</span> / <span>Sign In</span></p>
                        </div>
                    </div>
                    <div>
                        <p className='text-info'>United State of America</p>
                        <p className='text-title'>Arizona</p>
                        <div>
                            <button className='book-btn'>Book Now</button>
                            <p className='Choose_Tour'>Choose Tour</p>
                        </div>
                        <p className='asia'>Asia</p>
                        <div className='banner-icon'>
                            <BsFillArrowLeftCircleFill className='icon-1' />
                            <BsFillArrowRightCircleFill className='icon-1' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;