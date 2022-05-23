import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import axiosPrivate from "../Api/axiosPrivate";
import Fetcher from "../Api/Fetcher";
import Fotter from "../Shared/Fotter";
import Navbar from "../Shared/Navbar";
import PageTitle from "../Shared/PageTitle";
import Spinner from "../Shared/Spinner";

const Parts = () => {
  const { id } = useParams();
  const [parts, setParts] = useState({});
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [user] = useAuthState(auth);

  const { data, isLoading } = useQuery("/parts", () =>
    Fetcher.get(`/parts/${id}`).then((response) => {
      setParts(response.data);
    })
  );

  if (isLoading) {
    return <Spinner></Spinner>;
  }

 
 

  const onSubmit =  (data) => {
    const quantity = watch("min_order")
   const order ={
     name:user?.displayName,
     email:user?.email,
     price:parts?.price,
     order:quantity,
     productName:parts?.name
   }
    axiosPrivate.post('orders',order)
    .then(response => {
      console.log(response.data);
      if(response.data.insertedId){
        Swal.fire({
          icon: "success",
          title: "order successful",
          showConfirmButton: false,
          timer: 1500,
        });
        reset()
      }
    
    })
  };
  return (
    <div className="">
      <PageTitle title={"purchase"}></PageTitle>
      <Navbar />
      <div className="md:flex justify-evenly items-center mt-14">
        <div className="">
          <img style={{width:"250px",height:"300px"}} className="max-w-sm lg:max-w-lg mx-auto" src={parts.img} alt="" />
          <div className="mx-auto">
          <h2 className="text-2xl">Name: {parts.name}</h2>
          <p className="">{parts.desc}</p>
          <p className="">price:{`$${parts.price}`}</p>
          <p className="">Available:{parts.Available}</p>
          <p className="">Minimum order:{parts.minimum_order}</p>
          </div>
        </div>
        <div className="shadow-2xl px-16 py-10  lg:w-96">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                
                readOnly
                placeholder={user?.displayName}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                
                placeholder={user?.email}
                readOnly
                className="input input-bordered w-full sm:max-w-xs"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Available</span>
              </label>
              <input
               
                placeholder={`Available ${parts?.name} ${parts?.Available} piece`}
                readOnly
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Minimum Order</span>
              </label>
              <input
                {...register("min_order", {
                  required: {
                    value: true,
                    message: "minimum order required",
                  },
                })}
                placeholder={`Minimum order ${parts?.minimum_order} piece`}
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {parseInt(parts?.Available) < parseInt(watch().min_order) ? (
                  <span className="text-red-700 text-xs">
                    You can not order more than stock
                  </span>
                ) : parseInt(parts?.minimum_order) >
                  parseInt(watch().min_order) ? (
                  <span className="text-red-700 text-xs">
                    You can not order less than minimum order
                  </span>
                ) : (
                  ""
                )}
                {errors.min_order?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.min_order.message}
                    </span>
                  )}
              </label>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Price(per piece)</span>
              </label>
              <input
                readOnly
                placeholder={` $${parts?.price}`}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div class="form-control mt-6">
             {  parseInt(parts?.Available) < parseInt(watch().min_order) || parseInt(parts?.minimum_order) > parseInt(watch().min_order) ?
             <button disabled className="btn">Book Now</button> :<button className="btn">Book Now</button>
            }
            </div>
          </form>
        </div>
      </div>
      <Fotter />
    </div>
  );
};

export default Parts;
// {
//   parseInt(avail_qty) < parseInt(watch().quantity) || parseInt(min_order) > parseInt(watch().quantity) ?
//       <input type="submit" value='Order' className='btn btn-primary' disabled /> :

//       <input type="submit" value='Order' className='btn btn-primary' />}