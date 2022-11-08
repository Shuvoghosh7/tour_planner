import React from 'react';
import PopularTours from '../../PopularTours/PopularTours';
import Review from '../../Review/Review';
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
            <Review/>

        </div>
    );
};

export default Home;