import React from 'react';
import './PhotoGallery.css'
import img1 from '../../../images/photo/Southpole.png'
import img2 from '../../../images/photo/photo1.jpg'
import img3 from '../../../images/photo/photo2.png'
import img4 from '../../../images/photo/photo4.jpg'
const PhotoGallery = () => {
    return (
        <div className='photo_gallery'>
            <div className='photoGallery'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div>
            
        </div>
    );
};

export default PhotoGallery;