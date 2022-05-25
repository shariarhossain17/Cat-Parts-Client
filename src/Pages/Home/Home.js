import React from 'react';
import Fotter from '../Shared/Fotter';
import Navbar from '../Shared/Navbar';
import PageTitle from '../Shared/PageTitle';
import Banner from './Banner/Banner';
import Brands from './Brands';
import BuisnessSummary from './BuisnessSummary';
import CarParts from './CarParts';
import Downloads from './Downloads';
import Review from './Review';

const Home = () => {
    return (
        <div className=''>
            <PageTitle title='Home'></PageTitle>
            <Navbar/>
            <Banner/>
            <CarParts/>
            <BuisnessSummary/>
            <Review/>
            <Brands/>
            <Downloads/>
            <Fotter/>
        </div>
    );
};

export default Home;