import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { AiTwotoneStar } from 'react-icons/ai';
import { GoPrimitiveDot } from 'react-icons/go';
import { AiOutlineStar } from 'react-icons/ai';
import './PopularTours.css'

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
                        <div className='tour-name'>
                            <p><span><GoPrimitiveDot className='tour-name-icon' /></span> Australia</p>
                        </div>
                        <h3 className='tour-title'>Lorem Ipsum is simply dummy text.</h3>
                        <div className='toure-icon'>
                            <p>5 days | from $500</p>
                            <p>
                                <AiTwotoneStar className='ratting-icon' />
                                <AiTwotoneStar className='ratting-icon' />
                                <AiTwotoneStar className='ratting-icon' />
                                <AiOutlineStar className='ratting-icon2' />
                                <AiOutlineStar className='ratting-icon2' />
                            </p>
                            <p>3 reviews</p>

                        </div>

                    </div>
                </div>
                <div className='tour2'>
                    <div>
                        <div className='tour-name'>
                            <p><span><GoPrimitiveDot className='tour-name-icon' /></span> North Africa</p>
                        </div>
                        <h3 className='tour-title'>Lorem Ipsum is simply dummy text.</h3>
                        <div className='toure-icon'>
                            <p>5 days | from $500</p>
                            <p>
                                <AiTwotoneStar className='ratting-icon' />
                                <AiTwotoneStar className='ratting-icon' />
                                <AiTwotoneStar className='ratting-icon' />
                                <AiOutlineStar className='ratting-icon2' />
                                <AiOutlineStar className='ratting-icon2' />
                            </p>
                            <p>3 reviews</p>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default PopularTours;