import React from 'react';
import './Footer.css'
import logo from '../../images/logo.png'
import { BiPhoneCall } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-inside'>
                <div className='about-part'>
                    <img src={logo} alt="" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    <div className='contact'>
                        <h4><BiPhoneCall className='contact-icon' />+ 880 1611 66 4965</h4>
                        <h4><MdEmail className='contact-icon' />solutya@gmail.com</h4>
                        <h4><MdLocationOn className='contact-icon' />Usman center,  Uttara-12</h4>
                    </div>

                </div>
                <div className='Company'>
                    <h3>Company</h3>
                    <p>About us </p>
                    <p>Company Blogs</p>
                    <p>Work with Us</p>
                    <p>Meet the team</p>
                </div>
                <div className='Explore'>
                    <h3>Explore</h3>
                    <p>Accountb</p>
                    <p>Legel </p>
                    <p>Contact</p>
                    <p>Privecy Policy</p>
                </div>

                <div className='Newsletter'>
                    <h3>Newsletter</h3>
                    <div>
                        <button className='email-btn'>Email</button>
                    </div>
                    <div>
                        <button className='Subscribe-btn'>Subscribe</button>
                    </div>

                </div>
            </div>
            <div className='social'>
                <div className='social-content'>
                    <div className='social-login'>
                        <a href=""><BsFacebook className='social_icon'/></a>
                        <a href=""><AiFillTwitterCircle className='social_icon'/></a>
                        <a href=""><AiFillInstagram className='social_icon'/></a>
                        <a href=""><AiFillGithub className='social_icon'/></a>

                    </div>
                    <div>
                        <p>&copy; All Copyright 2022, Shuvo</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Footer;