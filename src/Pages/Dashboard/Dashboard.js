import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import UseAdmin from "../../Hooks/UseAdmin";
import Fotter from "../Shared/Fotter";
import Navbar from "../Shared/Navbar";

const Dashboard = () => {
  const [users] = useAuthState(auth);
  const [admin] = UseAdmin(users);

  return (
    <div>
      <Navbar />
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col bg-[#eff0f5] ">
          {/* <!-- Page content here --> */}
          <h1 className="text-4xl font-bold mt-4 text-center mb-6">
            Welcome to Dashboard
          </h1>
          <Outlet />
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto  w-80 bg-[#2c3e50] text-white">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
          {
            !admin && <>
                <li>
              <NavLink to="/dashboard/my-order">My Order</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/add-review">Add Review</NavLink>
            </li>
            </>
          }
            {admin && (
              <>
                <li>
                  <NavLink to="/dashboard/all-user">Make Admin</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/add-product">Add-Product</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manage-product">Manage-Product</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manage-all-orders">Manage-Orders</NavLink>
                </li>
              </>
            )}
            
          </ul>
        </div>
      </div>
      <Fotter />
    </div>
  );
};

export default Dashboard;
