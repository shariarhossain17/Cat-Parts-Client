import React from "react";
import { Link } from "react-router-dom";

const OrdersRow = ({order,index}) => {
    const {name,productName,price,order:quantity,_id} = order
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{productName}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{`$${quantity * price}`}</td>
      <td><button className="text-white rounded-md btn-xs bg-red-700">Cancel</button></td>
      <td><Link to={`/dashboard/payment/${_id}`}><button  className="btn btn-xs">Pay</button></Link></td>
    </tr>
  );
};

export default OrdersRow;
