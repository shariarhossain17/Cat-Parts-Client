import React from "react";
import Swal from "sweetalert2";
import axiosPrivate from "../Api/axiosPrivate";

const OrderCancelModal = ({ cancel, setCancel, refetch }) => {
  const handleDelete = () => {
    axiosPrivate.delete(`orders/${cancel?._id}`).then((response) => {
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
            Are you sure?
          </h3>
          <div class="modal-action">
            <label
              onClick={handleDelete}
              for="cancel-order"
              class="bg-red-600 btn-error btn text-white"
            >
              Delete
            </label>
            <label for="cancel-order" class="btn bg-[#30d2f2] text-white">
              Not Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCancelModal;
