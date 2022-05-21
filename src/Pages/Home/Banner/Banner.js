import React from 'react';
import bannerImg from '../../../Assets/Banner/banner.webp';
import './Banner.css';

const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${bannerImg})`}} class="hero min-h-[70vh]">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl text-white">Welcome our shop</h1>
            <p class="py-6 text-white">
            A complete auto package of fast, powerful features - Auto Parts Shopping Cart by Compunix is the ultimate automotive ecommerce system.
            </p>
            <button class="banner-btn btn">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;