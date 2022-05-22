import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axiosPrivate from "../Api/axiosPrivate";

const Payment = () => {
  const { id } = useParams();
  const {data,isLoading,refetch} = useQuery('payment',()=>{
      axiosPrivate.get(`payment/${id}`)
      .then(response => {
        //   console.log(response);
      })
  })
  return (
    <div>
      <h1>this is payment</h1>
    </div>
  );
};

export default Payment;
