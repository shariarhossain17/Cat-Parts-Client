import React, { useState } from "react";
import { useQuery } from "react-query";
import axiosPrivate from "../../Api/axiosPrivate";
import PageTitle from "../../Shared/PageTitle";
import Spinner from "../../Shared/Spinner";
import ManageProductDelete from "./ManageProductDelete";
import ManageProductRow from "./ManageProductRow";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [deleteProduct,setDeleteProduct] = useState(null)
  const { data, isLoading, refetch } = useQuery("manage_products", () => {
    axiosPrivate.get("all-products").then((response) => {
      setProducts(response.data);
    });
  });

  if(isLoading){
      return <Spinner></Spinner>
  }
  return (
    <div>
        <PageTitle title='manage-product'></PageTitle>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Product</th>
              <th>Available quantity</th>
              <th>Minimum-order</th>
              <th>Price</th>
              <th>Update quantity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
              {
                  products.map((product,index) => <ManageProductRow key={product._id} product={product} index={index} refetch={refetch} setDeleteProduct={setDeleteProduct}></ManageProductRow>)
              }
          </tbody>
        </table>
      </div>
      <ManageProductDelete deleteProduct={deleteProduct} setDeleteProduct={setDeleteProduct} refetch={refetch}></ManageProductDelete>
    </div>
  );
};

export default ManageProducts;
