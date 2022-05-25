import React, { useEffect, useState } from "react";
import Fetcher from "../Api/Fetcher";
import Fotter from "../Shared/Fotter";
import Navbar from "../Shared/Navbar";
import PageTitle from "../Shared/PageTitle";
import AllPartsCard from "./AllPartsCard";

const AllParts = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    Fetcher.get("parts").then((response) => {
      setParts(response.data);
    });
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-20 lg:px-16">
        <PageTitle title={"all-parts"}></PageTitle>
        <h1 className="text-center text-4xl text-gray-800 uppercase">
          Cars Parts
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {parts.slice(0, 6).map((part) => (
            <AllPartsCard key={part._id} part={part}></AllPartsCard>
          ))}
        </div>
      </div>
      <Fotter></Fotter>
    </div>
  );
};

export default AllParts;
