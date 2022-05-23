import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import axiosPrivate from "../Api/axiosPrivate";
import PageTitle from "../Shared/PageTitle";

const AddProfile = () => {
  const [user] = useAuthState(auth);
  const handleSubmit = (event) => {
    event.preventDefault();
    const updateUser = {
      name: user.displayName,
      education: event.target.education.value,
      city: event.target.city.value,
      district: event.target.district.value,
      number: event.target.number.value,
    };
    axiosPrivate.patch(`users/${user?.email}`, updateUser).then((response) => {
      console.log(response);
      if (response.data.matchedCount) {
        Swal.fire({
          icon: "success",
          title: "Your information updated",
          showConfirmButton: false,
          timer: 1500,
        });
        event.target.reset();
      }
    });
  };
  return (
    <div>
      <PageTitle title="add-profile"></PageTitle>
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Add your Information
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              name="education"
              type="text"
              placeholder="Education"
              class="input input-bordered w-full max-w-lg rounded-full mt-4 required"
            />
            <input
              name="city"
              type="text"
              placeholder="City"
              class="input input-bordered w-full max-w-lg rounded-full mt-4 required"
            />
            <input
              name="district"
              type="text"
              placeholder="District"
              class="input input-bordered w-full max-w-lg rounded-full mt-4 required"
            />
            <input
              name="number"
              type="Number"
              placeholder="Number"
              class="input input-bordered w-full max-w-lg rounded-full mt-4 required"
            />{" "}
            <br />
            <div className="">
              <button className="bg-[#f57224] text-white font-bold px-10 mt-6 text-center py-2 rounded-full">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProfile;
