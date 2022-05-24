import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useLocation } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const { pathname } = useLocation();
  const logOut = () => {
    signOut(auth);
  };

  const menuItem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}
      {user ? (
        <button onClick={logOut} className="btn btn-ghost">
          logout
        </button>
      ) : (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="lg:px-12 mt-16 ">
      <div class="navbar fixed top-0 z-50 left-0  bg-gray-50">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="bg-[#ff4400] lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact flex items-center dropdown-content mt-5 p-2 shadow bg-gray-50 w-[97vw] text-black"
            >
              {menuItem}
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl text-black">daisyUI</a>
        </div>
        {pathname.includes("dashboard") && (
          <label for="my-drawer-2" class=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white ml-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        )}
        <div class="navbar-end hidden text-black lg:flex">
          <ul class="menu menu-horizontal p-0">{menuItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
