import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';

import { AiOutlineStar } from 'react-icons/ai';
const ReviewCard = ({ review }) => {
    const { image, comment, name, role } = review;
 
    return (
        <div>
            <div className='review-content'>
                <img src={image} alt="" />
            </div>
            <div className='review-comment'>
                <h2>
                    <AiTwotoneStar className='ratting-icon' />
                    <AiTwotoneStar className='ratting-icon' />
                    <AiTwotoneStar className='ratting-icon' />
                    <AiOutlineStar className='ratting-icon2' />
                    <AiOutlineStar className='ratting-icon2' />

                </h2>
                <p>{comment}</p>
                <h6>{name}</h6>
                <h4>{role}</h4>
            </div>
        </div >

    );
};

export default ReviewCard;