import React from 'react';
import './Newsletter.css'
import { MdEmail } from 'react-icons/md';
const Newsletter = () => {
    return (
        <div className='New_sletter'>
            <div className='New_sletter_input'>
                <div>
                    <p>Newsletter</p>
                    <p>Sign Up to receive the best offer</p>
                </div>
                <div>
                    <input type="text" name="" id="" placeholder='Destination' className='text-input'/>
                </div>
                <div>
                    <input type="email" name="" id="" placeholder='Email' className='email-input' />
                </div>
                <div className='email-icon'><MdEmail className='emailIcon'/></div>

            </div>
            
        </div>
    );
};

export default Newsletter;