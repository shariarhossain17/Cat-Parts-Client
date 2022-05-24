import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axiosPrivate from "../../Api/axiosPrivate";
import PageTitle from "../../Shared/PageTitle";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const imgApi_key = "c694c4abb3bcf601b0b79494e815c533";
  const onSubmit = async (data) => {
    const image = data.img[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imgApi_key}`;
    // fetch(url, {
    //     method: 'POST',
    //     body: formData
    // })
    // .then(res => res.json())
    // .then(data => console.log(data))
    axios.post(url,formData)
    .then(response => {
        // console.log(response.data.data.url);
      
        if(response.data.success){
            const img = response.data.data.url;
            const product = {
                name:data.name,
                desc:data.desc,
                price:data.price,
                Available:data.Available,
                minimum_order:data.minimum_order,
                img:img
            }
            axiosPrivate.post('/parts',product)
            .then(response => {
                if(response.data.insertedId){
                    Swal.fire({
                        icon: "success",
                        title: "product added successful",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                      reset()
                }
                
            })
        }
    })
    // reset();
  };

  return (
    <div>
      <PageTitle title="add-product"></PageTitle>

      <div class="card max-w-sm shadow-lg mx-auto text-primary-content">
        <div class="card-body">
          <h2 class="card-title text-black">Add Product</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Product Name</span>
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "name required",
                  },
                })}
                placeholder="Product name"
                className="input input-bordered text-gray-800 w-full max-w-xs"
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Description</span>
              </label>
              <textarea
                {...register("desc", {
                  required: {
                    value: true,
                    message: "description required",
                  },
                })}
                placeholder="desc"
                className="input input-bordered text-gray-800 w-full max-w-xs"
              />
              <label className="label">
                {errors.desc?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.desc.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Available</span>
              </label>
              <input
                {...register("Available", {
                  required: {
                    value: true,
                    message: "Available required",
                  },
                })}
                placeholder="Available"
                className="input input-bordered text-gray-800  w-full max-w-xs"
              />
              <label className="label">
                {errors.Available?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.Available.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Minimum Order</span>
              </label>
              <input
                {...register("minimum_order", {
                  required: {
                    value: true,
                    message: "minimum order required",
                  },
                })}
                placeholder="minimum_order"
                className="input input-bordered text-gray-800  w-full max-w-xs"
              />
              <label className="label">
                {errors.minimum_order?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.minimum_order.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Price</span>
              </label>
              <input
                {...register("price", {
                  required: {
                    value: true,
                    message: " price required",
                  },
                })}
                placeholder="price"
                className="input input-bordered text-gray-800  w-full max-w-xs"
              />
              <label className="label">
                {errors.price?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.price.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control">
              <label htmlFor="" className="text-black">
                img
              </label>
              <label for="img" class="label">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-full bg-white text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </label>
              <input
                type="file"
                {...register("img", {
                  required: {
                    value: true,
                    message: " img required",
                  },
                })}
                hidden
                id="img"
                name="img"
                placeholder="image"
                className="input input-bordered text-gray-800  w-full max-w-xs"
              />
              <label className="label">
                {errors.price?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.price.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="bg-[#f57224] py-3 rounded max-w-xs">Add item</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
