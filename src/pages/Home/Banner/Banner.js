import React from 'react';
import './Banner.css'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

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
                        <div className='inside-banner-Login'>
                            <p><span>Sign Up</span> / <span>Sign In</span></p>
                        </div>
                    </div>
                    <div className='banner-text-content'>
                        <div className='united-text'>
                            <p>United State of America</p>
                            <h2>Arizona</h2>
                            <Link className='book-link'>Book Now</Link>
                            <Link className='choose-toure-link'>Choose Tour</Link>
                        </div>
                        <div className='asia-tour-text'>
                            <p>Asia</p>
                            <div>
                            <BsFillArrowLeftCircleFill className='icon-1' />
                            <BsFillArrowRightCircleFill className='icon-1' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;