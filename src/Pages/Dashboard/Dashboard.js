import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Fotter from "../Shared/Fotter";
import Navbar from "../Shared/Navbar";

const Dashboard = () => {
  
  return (
    <div>
      <Navbar />
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col ">
          {/* <!-- Page content here --> */}
          <h1 className="text-4xl">Welcome to Dashboard</h1>
          <Outlet />
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto  w-80 bg-[#2c3e50] text-white">
            {/* <!-- Sidebar content here --> */}
            <li className="text-white">
             <Link to='/dashboard'>My order</Link>
            </li>
            <li className="text-white">
            <NavLink to='/dashboard/add-review'>Add review</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <Fotter />
    </div>
  );
};

export default Dashboard;
