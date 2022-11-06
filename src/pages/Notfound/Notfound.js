import React from 'react';
import { Link } from 'react-router-dom';
import errors404 from '../../images/errors404.jpg'
import './Notfound.css'
const Notfound = () => {
    return (
        <div className='error'>
            <div>
                <img src={errors404} alt="" />
            </div>
            <div>
                <h1>Oops!</h1>
                <p>The page you're looking for isn't here</p>
                <p>You might have the wrong address, or the page may have moved.</p>
                <button><Link to="/" className='btn-link'>Go To Homepage</Link></button>


            </div>
        </div>
    );
};

export default Notfound;