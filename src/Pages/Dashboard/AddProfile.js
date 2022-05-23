import React from "react";
import PageTitle from "../Shared/PageTitle";

const AddProfile = () => {
  return (
    <div>
      <PageTitle title="add-profile"></PageTitle>
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Add your Information</h2>
        <form >
        <input type="text" placeholder="Education" class="input input-bordered w-full max-w-lg rounded-full mt-4 required" />
        <input type="text" placeholder="City" class="input input-bordered w-full max-w-lg rounded-full mt-4 required" />
        <input type="text" placeholder="District" class="input input-bordered w-full max-w-lg rounded-full mt-4 required" />
        <input type="Number" placeholder="Number" class="input input-bordered w-full max-w-lg rounded-full mt-4 required" /> <br />

       <div className="">
       <button className="bg-[#f57224] text-white font-bold px-10 mt-6 text-center py-2 rounded-full">Save</button>
       </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default AddProfile;
