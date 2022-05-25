import React from 'react';
import Fotter from './Fotter';
import Navbar from './Navbar';
import PageTitle from './PageTitle';

const Bloog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <PageTitle title='blog'></PageTitle>
            <div></div>
            <Fotter></Fotter>
        </div>
    );
};

export default Bloog;