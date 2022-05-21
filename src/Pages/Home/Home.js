import React from 'react';
import Navbar from '../Shared/Navbar';
import PageTitle from '../Shared/PageTitle';
import Banner from './Banner/Banner';
import CarParts from './CarParts';

const Home = () => {
    return (
        <div>
            <PageTitle title='Home'></PageTitle>
            <Navbar/>
            <Banner/>
            <CarParts/>
        </div>
    );
};

export default Home;