import React from "react";
import portfolio from "../../Assets/sh2_protfolio-removebg-preview (2).png";
import Fotter from "./Fotter";
import Navbar from "./Navbar";

const MyProtfolio = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="lg:px-12">
        <div className="lg:flex justify-evenly mt-16 items-center ">
          <div>
            <img src={portfolio} alt="" />
          </div>
          <div>
            <ul>
              <li>
                <span className="font-bold">Name:</span> Shahriar Hossian
              </li>
              <li>
                <span className="font-bold">Email:</span>{" "}
                shariarhossain23@gmail.com
              </li>
              <li>
                <span className="font-bold">Education:</span> Honers first year
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:flex mt-16 justify-evenly">
           <div>
           <h2 className="text-center text-2xl font-bold ">List of technology</h2>
           <ul>
               <li>1.HTML AND HTML5</li>
               <li>2.CSS AND CSS3</li>
               <li>3.BOOTSTRAP5</li>
               <li>4.TAILWIND CSS</li>
               <li>5.JAVASCRIPT</li>
               <li>6.REACT JS</li>
               <li>7.NODE JS</li>
               <li>7.EXPRESS JS</li>
               <li>8.MONGODB</li>
               
           </ul>
           </div>
           <div>
            <h2 className="text-center text-2xl font-bold ">Three project link</h2>
            <a target='_blank' className="underline text-blue-500" href="https://fitness-power-gym.web.app/" rel="noreferrer">fitness power</a> <br />
            <a target="_blank" className="underline text-blue-500" href="https://assignment11-dress-shop.web.app/?fbclid=IwAR09A-q18Tv-lzgWmcMaG_hwFCKM0rx1TDo2hFkoM96bXUuj_12N4uxf-Tw" rel="noreferrer">Dress shop full stack</a> <br />
            <a target="_blank" className="underline text-blue-500" href="https://car-parts-8c7dd.web.app/" rel="noreferrer">Dress shop full stack</a> <br />
           
           </div>
        </div>
        <div className="mt-16 text-2xl font-bold">
            About Me:
            Hi there,I am Shariar hossain I am from khulna.I am student.Now I am learning web development.I am jr developer right now.I want a full stack developer but if i have practice more and more thats is impossible thats why i will join a It company.I will help them and learn more and more.I am creative.But the main thing is i am non cse background.But last 5 month full effort and i realize  that it is possible any background.I am hardworker.I can do everything for web development its my passion.
        </div>
      </div>
      <Fotter></Fotter>
    </div>
  );
};

export default MyProtfolio;
