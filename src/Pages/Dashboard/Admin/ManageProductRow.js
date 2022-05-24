import { useState } from "react";
import Swal from "sweetalert2";
import axiosPrivate from "../../Api/axiosPrivate";


const ManageProductRow = ({ product, index ,refetch}) => {
  const [quantity,setQuantity] = useState("")
  const {name,img,Available,minimum_order,price,_id} = product;
  const handleUpdate = () => {
      if(quantity){
          const newQuantity = parseInt(Available) + parseInt(quantity)
          axiosPrivate.put(`all-products/${_id}`,{Available:newQuantity})
          .then(response => {
              console.log(response.data);
              if(response.data.modifiedCount > 0){
                Swal.fire({
                    icon: "success",
                    title: "quantity updated",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  refetch()
              }
          })
      }
      else{
        Swal.fire({
            icon: "error",
            title: "quantity required",
            showConfirmButton: false,
            timer: 1500,
          });
      }
  }
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{Available}</td>
      <td>{minimum_order}</td>
      <td>{`$${price} (per piece)`}</td>
      <td><input onChange={(e)=> setQuantity(e.target.value)} className="input input-rounded w-20 required: h-6 bg-[#dbdbda]"  />  <button onClick={ ()=>handleUpdate(_id)} className="bg-[#ff4400] btn-xs text-white rounded uppercase">update</button></td>
      <td>
          <button  className="text-white rounded btn-xs uppercase  bg-red-600">Delete</button>
      </td>
    </tr>
  );
};

export default ManageProductRow;
