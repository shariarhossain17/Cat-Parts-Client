import React from "react";
import Swal from "sweetalert2";
import axiosPrivate from "../../Api/axiosPrivate";

const UserRow = ({ user, index, refetch }) => {
  const {email, role } = user;
  const handleAdmin = () => {
    
        axiosPrivate.put(`user/admin/${email}`).then((response) => {
            if (response.data.modifiedCount > 0) {
              Swal.fire({
                icon: "success",
                title: "successfully make a admin",
                showConfirmButton: false,
                timer: 1500,
              });
              refetch();
            }
          }).catch(function (error) {
            if(error.response.status === 403){
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
          <button className="btn btn-xs">Admin</button>
        ) : (
          <button onClick={handleAdmin} className="btn btn-xs">
            make admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-xs btn-error text-white">Delete</button>
      </td>
    </tr>
  );
};

export default UserRow;
