import React, { useState } from "react";
import { useQuery } from "react-query";
import axiosPrivate from "../../Api/axiosPrivate";
import PageTitle from "../../Shared/PageTitle";
import Spinner from "../../Shared/Spinner";
import UserRow from "./UserRow";

const Alluser = () => {
  const [users, setUsers] = useState([]);
  const { data, isLoading, refetch } = useQuery("all-users", () => {
    axiosPrivate.get("all-user").then((response) => {
      setUsers(response.data);
    });
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <PageTitle title="make-admin"></PageTitle>
      <h1 className="text-4xl text-center text-gray-600 mb-6 mt-4 font-bold">All user</h1>

      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th>Email</th>
              <th>Make admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow key={user._id} user={user} index={index} refetch={refetch}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alluser;
