import React from "react";
import Swal from "sweetalert2";
import axiosPrivate from "../../Api/axiosPrivate";

const ManageOrderRow = ({ order, index, refetch }) => {
  const {
    _id,
    name,
    email,
    price,
    order: quantity,
    productName,
    paid,
    status,
  } = order;

  const handleShipped = () => {
    axiosPrivate.put(`all-orders/${_id}`).then((response) => {
      if (response.data.matchedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "order Shipped",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{productName}</td>
      <td>{quantity}</td>
      <td>{`$${quantity * price}`}</td>
      {paid ? (
        <td className="flex items-center font-bold">
          paid
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 bg-[#ff4400] rounded-full text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </td>
      ) : (
        <td className="text-red-500 font-bold">unpaid</td>
      )}
      {status ? (
        <td className="text-[#ff4400] font-bold">
          shipped
         
        </td>
    
      ) : (
        <td>pending</td>
      )}
      {
        paid && !status ?   
        <td>
        <button
          onClick={handleShipped}
          className="bg-[#ff4400] btn-xs text-white uppercase rounded-xl"
        >
          Shipped
        </button>
      </td> : <td></td>
      }
    </tr>
  );
};

export default ManageOrderRow;
