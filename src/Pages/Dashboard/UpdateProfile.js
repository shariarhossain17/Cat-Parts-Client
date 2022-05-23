import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import UserInformation from '../../Hooks/UserInformation';
import axiosPrivate from '../Api/axiosPrivate';
import PageTitle from '../Shared/PageTitle';

const UpdateProfile = () => {
    const [user] = useAuthState(auth);
    const [users] = UserInformation()
    const handleSubmit = (event) => {
      event.preventDefault();
      const updateUser = {
        name: event.target.name.value,
        number: event.target.number.value,
      };
      axiosPrivate.patch(`users/${user?.email}`, updateUser).then((response) => {
        console.log(response);
        if (response.data.matchedCount) {
          Swal.fire({
            icon: "success",
            title: "update successful",
            showConfirmButton: false,
            timer: 1500,
          });
          event.target.reset();
        }
      });
    };
    return (
        <div>
        <PageTitle title="update-profile"></PageTitle>
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Edit Profile
            </h2>
            <form onSubmit={handleSubmit}>
            <label className='block font-[500]' htmlFor="">Name:
              </label>
              <input
                name="name"
                type="text"
                placeholder={user?.displayName}
                class="input input-bordered w-full max-w-lg rounded-full mt-2 required"
              />
              <label className='block  font-[500] mt-2' htmlFor="">email <small>(email cannot be change)</small>:
              </label>
              <input
                name="email"
                type="text"
                readOnly
                placeholder={`${user?.email}`}
                class="input input-bordered w-full max-w-lg rounded-full mt-2 required"
              />
              <label className='block  font-[500] mt-2 ' htmlFor="">Number:
              </label>
              <input
                name="number"
                type="Number"
                placeholder={users.number}
                class="input input-bordered w-full max-w-lg rounded-full mt-4 required"
              />{" "}
              <br />
              <div className="">
                <button className="bg-[#f57224] text-white font-bold px-10 mt-6 text-center py-2 rounded-full">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default UpdateProfile;