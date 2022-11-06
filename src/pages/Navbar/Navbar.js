import React from 'react';
import './Navbar.css'
import logo from '../../images/logo.png'
import { AiOutlineSearch } from 'react-icons/ai';
const Navbar = () => {
    return (
        <div className='navbar'>
            <div>
                <a href="/">
                    <div className='manu-item'>
                        <img src={logo} alt="" />
                    </div>
                </a>
            </div>
            <div className='menu-var'>
                <div>
                    <a href="/">
                        <div className='manu-item'>HOME</div>
                    </a>
                    <a href="#menu">
                        <div className='manu-item'>FEATURES</div>
                    </a>
                    <a href="#teppanyaki">
                        <div className='manu-item'>PAGES</div>
                    </a>
                    <a href="#memories">
                        <div className='manu-item'>TOURS</div>
                    </a>
                    <a href="#gift-container">
                        <div className='manu-item'>CARS CARDS</div>
                    </a>
                    <a href="#contact">
                        <div className='manu-item'>HOTELS</div>
                    </a>
                    <a href="">
                        <div className='manu-item'>FLIGHTS</div>
                    </a>
                </div>
                <div className='search-logo'>
                    <AiOutlineSearch />
                </div>
            </div>
        </div>
    );
};

export default Navbar;