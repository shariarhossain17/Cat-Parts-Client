import React from "react";
import Swal from "sweetalert2";
import axiosPrivate from "../Api/axiosPrivate";

const OrderCancelModal = ({ cancel, setCancel, refetch }) => {
  console.log(cancel?._id);
  const handleDelete = () => {
    axiosPrivate.delete(`orders/${cancel?._id}`).then((response) => {
      console.log(response);
      if (response.data.deletedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "your order cancel",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
        setCancel(null);
      }
    });
  };

  return (
    <div>
      <input type="checkbox" id="cancel-order" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you sure cancel {cancel?.productName}?
          </h3>
          <div class="modal-action">
            <label
              onClick={handleDelete}
              for="cancel-order"
              class="btn btn-error bg-red-700 text-white"
            >Cancel order</label>
            <label for="cancel-order" class="btn">
              Not Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCancelModal;
