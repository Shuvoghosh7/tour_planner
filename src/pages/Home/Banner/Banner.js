import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner-content">
            <div className="banner">
                <div className="inside-banner">
                    <div className='inside-banner-top'>
                       <p>Support</p>
                       <p>USD</p>
                       <p>EN</p>
                    </div>
                    <div className='nside-banner-Login'>
                        <p><span>Sign Up</span> / <span>Sign In</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;