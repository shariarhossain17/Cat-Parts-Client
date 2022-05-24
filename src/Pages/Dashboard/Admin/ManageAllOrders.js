import React, { useState } from "react";
import { useQuery } from "react-query";
import axiosPrivate from "../../Api/axiosPrivate";
import PageTitle from "../../Shared/PageTitle";
import CancelModal from "./CancelModal";
import ManageOrderRow from "./ManageOrderRow";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [cancel,setCancel] = useState(null)
  const { data, isLoading, refetch } = useQuery("all-orders", () => {
    axiosPrivate.get("all-orders").then((response) => {
      setOrders(response.data);
    });
  });
  return (
    <div>
      <PageTitle title="manage-all-orders"></PageTitle>
      <h2 className="text-4xl text-gray-500 text-center mb-4">
        Manage All Orders
      </h2>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Product name</th>
              <th>order</th>
              <th>Total amount</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Updated</th>
              <th>Cancel order</th>
            </tr>
          </thead>
          <tbody>
              {
                  orders.map((order,index) => <ManageOrderRow key={order._id} order={order} index={index} refetch={refetch} setCancel={setCancel}></ManageOrderRow>)
              }
          </tbody>
        </table>
      </div>
      <CancelModal cancel={cancel} setCancel={setCancel} refetch={refetch}></CancelModal>
    </div>
  );
};

export default ManageAllOrders;
