import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Fetcher from "../Api/Fetcher";
import PartsCard from "./PartsCard";

const CarParts = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    Fetcher.get("parts").then((response) => {
      setParts(response.data);
    });
  }, []);
  const navigate = useNavigate()
  return (
    <div className="mt-20 lg:px-16">
      <h1 className="text-center text-4xl text-gray-800 uppercase">
        Cars Parts
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {parts.slice(0, 6).map((part) => (
          <PartsCard key={part._id} part={part}></PartsCard>
        ))}
      </div>
      <div className="text-center flex justify-center  my-24">
        <button onClick={()=> navigate('/all-parts')} className="uppercase bg-[#ff4400] text-white font-[500] px-12 py-3 rounded-md  flex items-center justify-center">
          See all{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default CarParts;
