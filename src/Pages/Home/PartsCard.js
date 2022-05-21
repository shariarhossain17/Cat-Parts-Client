import React from "react";

const PartsCard = ({ part }) => {
    const {name,img,desc,price,minimum_order,Available} = part
  return (
    <div>
      <div class="card max-w-sm bg-base-100 shadow-2xl mt-10 h-[600px]">
        <figure>
          <img
             style={{width:"300px", height:"200px"}}
            src={img}
            alt="img"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            Name: {name}
          </h2>
          <p className="text-xl">{desc}</p>
          <p className="text-xl">Minimum-order: <small>{minimum_order} piece</small></p>
          <p className="text-xl">Available: <small>{Available} piece</small></p>
          <p className="text-xl">Price: <small>${price}</small></p>
          <div>
              <button className=" bg-[#242c32] text-white py-3 px-6 my-4 rounded-md">PURCHASE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartsCard;
