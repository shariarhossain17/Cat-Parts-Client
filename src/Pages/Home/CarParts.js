import React, { useEffect, useState } from 'react';
import Fetcher from '../Api/Fetcher';
import PartsCard from './PartsCard';

const CarParts = () => {
    const [parts,setParts] = useState([])

    useEffect(()=>{
     Fetcher.get('parts')
     .then(response => {
         setParts(response.data)
     })

    },[])
    return (
        <div className='mt-20 lg:px-16'>

        <h1 className='text-center text-4xl text-[#060407]'>Cart Parts</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    parts.slice(0,6).map(part => <PartsCard key={part._id} part={part}></PartsCard>)
                }
            </div>
        </div>
    );
};

export default CarParts;