import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axiosPrivate from "../Api/axiosPrivate";

const CheckooutForm = ({ payments }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCarderror] = useState("");
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { name, email, _id } = payments;
  const price = payments.price * payments.order;

  useEffect(() => {
    axiosPrivate.post("create-payment-intent", { price }).then((response) => {
      if (response?.data?.clientSecret) {
        setClientSecret(response.data.clientSecret);
      }
    });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCarderror(error?.message || "");
    setProcessing(true);

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (intentError) {
      setCarderror(intentError?.message);
      setProcessing(false);
    } else {
      setSuccess(paymentIntent.id);
      setCarderror("");
      Swal.fire({
        icon: "success",
        title: "your payment successful",
        showConfirmButton: false,
        timer: 1500,
      });

      // updated payment
      const payment = {
        orderId: _id,
        transactionId: paymentIntent.id,
      };
      axiosPrivate.patch(`orders/${_id}`, payment).then((response) => {
        setProcessing(false);
      });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                placeholder: {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-md mt-4 bg-sky-900"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {success && (
        <p className="text-purple-900 font-semibold">
          Your transaction id: {success}
        </p>
      )}
    </>
  );
};

export default CheckooutForm;
