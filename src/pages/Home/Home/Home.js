import React from 'react';
import PopularTours from '../../PopularTours/PopularTours';
import Banner from '../Banner/Banner';
import Facility from '../Facility/Facility';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Facility/>
            <PopularTours/>
        </div>
    );
};

export default Home;