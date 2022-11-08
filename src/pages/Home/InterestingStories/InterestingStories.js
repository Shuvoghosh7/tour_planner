import React from 'react';
import './InterestingStories.css'
import Rflag from '../../../images/Interesting/Flag-Russia (1).png'
import SouthpoleFlag from '../../../images/Interesting/images.jpg'
import AfricaFlag from '../../../images/Interesting/AfricaF.png'
import GreeceFlag from '../../../images/Interesting/GreeceF.png'
import { Link } from 'react-router-dom';
const InterestingStories = () => {
    return (
        <div className='Interesting_Stories'>
            <h3>Interesting Stories</h3>
            <p>Watch and be inspired</p>

            <div className='Interesting_countrys'>
                <Link>
                    <div className='int-countrys1'>
                        <img src={Rflag} alt="" className='intcountrys_flag'/>
                        <p>Russia</p>
                    </div>
                </Link>
                <Link>
                    <div className='int-countrys2'>
                        <img src={ SouthpoleFlag} alt="" className='intcountrys_flag'/>
                        <p>South pole</p>
                    </div>
                </Link>
                <Link>
                    <div className='int-countrys3'>
                        <img src={ AfricaFlag} alt="" className='intcountrys_flag'/>
                        <p>Africa</p>
                    </div>
                </Link>
                <Link>
                    <div className='int-countrys4'>
                        <img src={ GreeceFlag} alt="" className='intcountrys_flag'/>
                        <p>Greece</p>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default InterestingStories;