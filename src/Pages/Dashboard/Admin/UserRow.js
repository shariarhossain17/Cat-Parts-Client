import React from "react";
import Swal from "sweetalert2";
import axiosPrivate from "../../Api/axiosPrivate";

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;
  const handleAdmin = () => {
    axiosPrivate
      .put(`user/admin/${email}`)
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "successfully make a admin",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      })
      .catch(function (error) {
        if (error.response.status === 403) {
          Swal.fire({
            icon: "error",
            title: "failed to make an admin",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const removeAdmin = () => {
    axiosPrivate
      .patch(`user/admin/${email}`)
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "remove admin success",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      })
      .catch(function (error) {
        if (error.response.status === 403) {
          Swal.fire({
            icon: "error",
            title: "failed to make an admin",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <tr>
      <td>{email}</td>
      <td>
        {role === "admin" ? (
           <button onClick={removeAdmin} className=" text-white rounded-xl btn-xs uppercase  bg-red-500">Remove admin</button>
        ) : (
          <button onClick={handleAdmin} className="bg-[#ff4400] btn-xs text-white uppercase rounded-xl">
            make admin
          </button>
        )}
      </td>
       {
         role === "admin" ?<td className="text-[#ff4400] font-bold uppercase">admin</td>:<td></td>
       }
    </tr>
  );
};

export default UserRow;
