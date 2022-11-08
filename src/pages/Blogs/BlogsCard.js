import React from 'react';

const BlogsCard = ({ blog }) => {
    const { userImage, userName, blogeImage, description } = blog
    return (
        <div>
            <div className='blog-img'>
                <img src={blogeImage} alt="" />
            </div>
            <div className='blog-content'>
                <div className='blog-user-image'>
                    <img src={userImage} alt="" />
                    <p>{userName}</p>
                </div>
                <h4 className='blog-description'>{description}</h4>
            </div>

        </div>
    );
};

export default BlogsCard;