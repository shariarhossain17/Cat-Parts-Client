import React, { useState } from "react";
import { useQuery } from "react-query";
import axiosPrivate from "../../Api/axiosPrivate";
import PageTitle from "../../Shared/PageTitle";
import ManageOrderRow from "./ManageOrderRow";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const { data, isLoading, refetch } = useQuery("all-orders", () => {
    axiosPrivate.get("all-orders").then((response) => {
      console.log(response);
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
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
              {
                  orders.map((order,index) => <ManageOrderRow key={order._id} order={order}></ManageOrderRow>)
              }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
