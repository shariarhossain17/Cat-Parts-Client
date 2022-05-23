import React, { useEffect } from 'react';
import axiosPrivate from '../Api/axiosPrivate';

const Review = () => {
    useEffect(()=>{
        axiosPrivate.get('reviews')
        .then(response => {
            
        })
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Review;