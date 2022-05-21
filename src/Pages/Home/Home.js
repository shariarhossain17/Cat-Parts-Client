import React from 'react';
import Fotter from '../Shared/Fotter';
import Navbar from '../Shared/Navbar';
import PageTitle from '../Shared/PageTitle';
import Banner from './Banner/Banner';
import BuisnessSummary from './BuisnessSummary';
import CarParts from './CarParts';

const Home = () => {
    return (
        <div className=''>
            <PageTitle title='Home'></PageTitle>
            <Navbar/>
            <Banner/>
            <CarParts/>
            <BuisnessSummary/>
            <Fotter/>
        </div>
    );
};

export default Home;