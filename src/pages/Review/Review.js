import React, { useEffect, useState } from 'react';
import './Review.css'
import ReviewCard from './ReviewCard';
const Review = () => {
    const[reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('/Review.json')
        .then(res =>res.json())
        .then(data =>setReviews(data))
    },[])
    return (
        <div className='review'>
            <p>Testimonials and Review</p>
            <h4>What They’re Saying</h4>
            <div className='reviev-card'>
                {
                    reviews?.slice(0,3).map(review => 
                        <ReviewCard
                        review={review}
                        />
                        )

                }
            </div>

            
        </div>
    );
};

export default Review;