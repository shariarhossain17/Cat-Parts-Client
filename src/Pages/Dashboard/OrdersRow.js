import React from "react";
import { Link } from "react-router-dom";

const OrdersRow = ({ order, index }) => {
  const { name, productName, price, order: quantity, _id, paid } = order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{productName}</td>
      <td>{quantity}</td>
      <td>{`$${price}`}</td>
      <td>{`$${quantity * price}`}</td>
      <td>
        {!order.paid ? (
          <button disabled className="text-white rounded-md btn-xs bg-red-700">
            Cancel
          </button>
        ) : (
         <div className="flex">
            <p className="text-slate-800 font-bold">
            paid
          </p>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 flex bg-green-600 rounded-full text-white mt-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
         </div>
        )}
      </td>
      <td>
        {paid ? (
          <div className="flex">
            <p className="text-slate-800 font-bold flex">
              paid
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 bg-green-600 rounded-full text-white mt-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </div>
        ) : (
          <Link to={`/dashboard/payment/${_id}`}>
            <button className="btn btn-xs">Pay</button>
          </Link>
        )}
      </td>
    </tr>
  );
};

export default OrdersRow;
