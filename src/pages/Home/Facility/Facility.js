import React from 'react';
import { Link } from 'react-router-dom';
import { ImLocation2 } from 'react-icons/im';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { MdPeopleAlt } from 'react-icons/md';
import './Facility.css'
const Facility = () => {
    return (
        <div className='our-facility'>
            <div>
                <ul className='facility-manu'>
                    <li className='hotel-link'><Link to="/hotel" className='facility-Link'>Hotel</Link></li>
                    <li><Link className='facility-Link'>Flights</Link></li>
                    <li><Link to="/Cars" className='facility-Link'>Cars</Link></li>
                    <li><Link to="/Packages" className='facility-Link'>Packages</Link></li>
                    <li><Link to="/Cruise" className='facility-Link'>Cruise</Link></li>
                    <li to="/Holiday" className='holiday'><Link className='facility-Link'>Holiday</Link></li>
                </ul>
            </div>
            <div>
                <form className='search-facility'>
                    <div>
                        <div>
                            <label><span><ImLocation2/></span> Going to</label>
                        </div>
                        <input type="text" placeholder='Location here' className='input-text'/>
                    </div>
                    <div>
                        <div>
                            <label><span><BsFillPersonCheckFill/></span> Check in</label>
                        </div>
                        <input type="text" placeholder='Location here' className='input-text'/>
                    </div>
                    <div>
                        <div>
                            <label><span><BsFillPersonCheckFill/></span> Check out </label>
                        </div>
                        <input type="text" placeholder='Location here' className='input-text'/>
                    </div>
                    <div>
                        <div>
                            <label><span><MdPeopleAlt/></span> Travelers</label>
                        </div>
                        <input type="text" placeholder='Location here' className='input-text'/>
                    </div>
                    <div>
                        <input type="submit" value="Search" className='submit-btn'/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Facility;