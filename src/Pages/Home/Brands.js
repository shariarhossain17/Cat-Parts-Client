import React from 'react';
import img1 from '../../Assets/image1-removebg-preview.png';
import img2 from '../../Assets/image2-removebg-preview.png';
import img4 from '../../Assets/image4-removebg-preview.png';
import img5 from '../../Assets/image5-removebg-preview.png';
import img6 from '../../Assets/image6-removebg-preview.png';
import img7 from '../../Assets/image7-removebg-preview.png';
import img8 from '../../Assets/image8-removebg-preview.png';
import img9 from '../../Assets/images3-removebg-preview.png';
import img3 from '../../Assets/img9-removebg-preview.png';

const Brands = () => {
    return (
       <div className='mt-[100px] lg:px-12 '>
               <h1 className='uppercase text-center text-4xl text-gray-800 mb-10'>Brands we trust</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10  '>
            <div className=" bg-gray-200 h-[200px] flex justify-center">
                <img width="200px"  src={img1} alt="" />
            </div>
            <div className=" bg-gray-200 h-[200px] flex justify-center items-center px-4 rounded">
                <img width="300px"  src={img2} alt="" />
            </div>
            <div className=" bg-gray-200 h-[200px] flex justify-center items-center px-4 rounded">
                <img width="300px"  src={img3} alt="" />
            </div>
            <div className=" bg-gray-200 h-[200px] flex justify-center items-center px-4 rounded">
                <img width="300px"  src={img4} alt="" />
            </div>
            <div className=" bg-gray-200 h-[200px] flex items-center px-4 rounded">
                <img width="300px" height="300px" src={img5} alt="" />
            </div>
            <div className=" bg-gray-200 h-[200px] flex items-center justify-center px-4 rounded">
                <img width="300px"  src={img6} alt="" />
            </div>
            <div className=" bg-gray-200 h-[200px] flex justify-center items-center px-4 rounded">
                <img width="300px"  src={img7} alt="" />
            </div>
            <div className=" bg-gray-200 justify-center h-[200px] flex items-center px-4 rounded">
                <img width="200px" src={img8} alt="" />
            </div>
            <div className=" bg-gray-200 h-[200px] flex justify-center items-center px-4 rounded">
                <img width="300px"  src={img9} alt="" />
            </div>
        </div>
       </div>
    );
};

export default Brands;