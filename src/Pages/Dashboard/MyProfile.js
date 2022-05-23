import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import UserInformation from "../../Hooks/UserInformation";
import PageTitle from "../Shared/PageTitle";

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const [users] = UserInformation()
  return (
    <div>
      <PageTitle title="my profile"></PageTitle>
      <div class="card  bg-base-100 shadow-xl">
        <figure>
         
        </figure>
        <div class="card-body mx-auto mb-4">
            <div className="flex items-center gap-10 mb-6">
                <div>
                    <h1 className="text-2xl">My profile</h1>
                </div>
                <div>
                <NavLink className='bg-[#f57224] text-center py-2 px-10 mt-4 w-32 rounded-full text-white' to='/dashboard/update-profile'>Edit Profile</NavLink>
                </div>
            </div>
            <hr />
          <h2 className="text-[15px] font-bold mt-4">Name :</h2>
          <h1 className="text-xl">{users?.name || user.displayName}</h1>
          <h2 className="text-[15px] font-bold mt-4">Email:</h2>
          <h1 className="text-xl"> {user.email}</h1>
          <h2 className="text-[15px] font-bold mt-4">Education:</h2>
          <h1 className="text-xl">{users.education}</h1>
          <h2 className="text-[15px] font-bold mt-4">City:</h2>
          <h1 className="text-xl">{users.city}</h1>
          <h2 className="text-[15px] font-bold mt-4">District:</h2>
          <h1 className="text-xl">{users.district}</h1>
          <h2 className="text-[15px] font-bold mt-4">Phone:</h2>
          <h1 className="text-xl">{users.number}</h1>
          <NavLink className="bg-[#f57224] text-center py-2 px-10 mt-6  rounded text-white " to='/dashboard/add-profile'>Add Your information</NavLink>
        </div>
      </div>
   <div>
   </div>
      
    </div>
  );
};

export default MyProfile;
