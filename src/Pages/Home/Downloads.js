import React from "react";
import apple from '../../Assets/apple-removebg-preview.png';
import google from '../../Assets/google-removebg-preview.png';

const Downloads = () => {
  return (
    <div className=" mt-28">
      <div className="lg:flex items-center justify-center mx-auto">
        <p className="text-black text-2xl text-center">Download our App & then shop on the go</p>
        <div className="lg:flex">
        <img width="206px" style={{margin:"16px auto"}} className="ml-[21px]  h-[65px]" src={google} alt="" />
        <img width="245px" className="mx-auto" src={apple} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Downloads;
