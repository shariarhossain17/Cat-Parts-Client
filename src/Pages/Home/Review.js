import React, { useEffect, useState } from "react";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import axiosPrivate from "../Api/axiosPrivate";
import ReviewCard from "./ReviewCard";
const Review = () => {
    const [reviews,setReview] = useState([])
  useEffect(() => {
    axiosPrivate.get("reviews").then((response) => {
      setReview(response.data)
    });
  }, []);

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    /* mobileFirst: true, */
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-16 px-16">
      <h1 className="text-center text-4xl mb-20 uppercase text-gray-800">Our Client Reviews</h1>
      <Slider {...settings} autoplay={true}>
          {
              reviews.map(review => <ReviewCard key={review._id} review={review} ></ReviewCard>)
          }
      </Slider>
    </div>
  );
};

export default Review;
