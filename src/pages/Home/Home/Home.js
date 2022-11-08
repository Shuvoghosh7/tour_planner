import React from 'react';
import PopularTours from '../../PopularTours/PopularTours';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import Facility from '../Facility/Facility';
import InterestingStories from '../InterestingStories/InterestingStories';
import TopDestinations from '../TopDestinations/TopDestinations';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Facility/>
            <PopularTours/>
            <TopDestinations/>
            <InterestingStories/>
            <Brand/>

        </div>
    );
};

export default Home;