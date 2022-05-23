import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CheckooutForm from '../../Pages/Dashboard/CheckooutForm';
import axiosPrivate from "../Api/axiosPrivate";
import Spinner from "../Shared/Spinner";

const stripePromise = loadStripe(
  "pk_test_51L0e7DJVuUKdOSgodXlRxjzrt9f8fKWzD9Jum98GewskqXtaZ9Mx725bepiQ7zjAuEpcALdbkJEVHlNIG0RTIanM00m74yy2rn"
);
const Payment = () => {
  const { id } = useParams();
  const [payments, setPayments] = useState([]);
  const { data, isLoading, refetch } = useQuery(["payment", id], () => {
    axiosPrivate.get(`payment/${id}`).then((response) => {
      setPayments(response.data);
    });
  });

  const price = payments.order * parseInt(payments.price);

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl mt-12 mx-auto">
        <div class="card-body">
          <p className="text-xl text-fuchsia-700 font-bold">
            Hello, {payments.name}
          </p>
          <h2 class="card-title">Please pay for {payments.productName}</h2>
          <p className="text-xl">Amount$ {price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 mx-auto max-w-md mt-10 shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
           <CheckooutForm payments={payments} price={price}/>
          </Elements> 
        </div>
      </div>
    </div>
  );
};

export default Payment;
