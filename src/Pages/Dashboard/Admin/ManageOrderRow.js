import React from "react";

const ManageOrderRow = ({ order, index }) => {
  console.log(order);
  const { name, email, price, order: quantity, productName, paid } = order;
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
            class="h-4 w-4 bg-green-700 rounded-full text-white"
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
        <td className="text-red-700 font-bold">unpaid</td>
      )}
      <td>pending</td>
      <td><button className="bg-[#ff4400] btn-xs text-white uppercase rounded-xl">Shipped</button></td>
    </tr>
  );
};

export default ManageOrderRow;
