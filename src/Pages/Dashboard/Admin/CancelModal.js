import React from "react";
import Swal from "sweetalert2";
import axiosPrivate from "../../Api/axiosPrivate";

const CancelModal = ({ cancel, setCancel, refetch }) => {
  const handleDelete = () => {
    axiosPrivate.delete(`all-orders/${cancel?._id}`).then((response) => {
      if (response.data.deletedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "order cancel",
          showConfirmButton: false,
          timer: 1500,
        });
        setCancel(null);
        refetch();
      }
    });
  };
  return (
    <div>
      <input type="checkbox" id="cancel-order" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Are you sure?</h3>
          <div class="modal-action">
            <label
              onClick={handleDelete}
              for="cancel-order"
              class="btn-md bg-red-600 flex font-bold text-white rounded-md uppercase items-center"
            >
              Cancel order
            </label>
            <label for="cancel-order" class="btn-md bg-[#30d2f2] flex font-bold text-white rounded-md uppercase items-center">
              Not now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelModal;
