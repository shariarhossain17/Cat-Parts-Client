import React from 'react';
import Navbar from '../Shared/Navbar';
import PageTitle from '../Shared/PageTitle';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <PageTitle title='Home'></PageTitle>
            <Navbar/>
            <Banner/>
        </div>
    );
};

export default Home;