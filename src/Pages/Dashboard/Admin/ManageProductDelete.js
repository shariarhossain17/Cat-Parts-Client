import React from "react";
import Swal from "sweetalert2";
import axiosPrivate from "../../Api/axiosPrivate";

const ManageProductDelete = ({ deleteProduct, setDeleteProduct, refetch }) => {
  const handleDelete = () => {
    axiosPrivate
      .delete(`all-products/${deleteProduct?._id}`)
      .then((response) => {
        if (response.data.deletedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "delete successful",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="product-delete" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Are you sure delete this product?</h3>
          <div class="modal-action">
          <label
              onClick={handleDelete}
              for="product-delete"
              className="btn btn-error bg-red-600 text-white"
            >
              Delete
            </label>
            <label for="product-delete" class="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProductDelete;
