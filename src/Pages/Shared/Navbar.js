import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation } from "react-router-dom";
import logo3 from "../../Assets/logo3.jpeg";
import auth from "../../firebase.init";
import CustomLink from "./CustomLink";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const { pathname } = useLocation();
  const logOut = () => {
    signOut(auth);
  };

  const menuItem = (
    <>
      <a>
        <CustomLink to="/">Home</CustomLink>
      </a>
      {user && (
        <a>
          <CustomLink to="/dashboard">Dashboard</CustomLink>
        </a>
      )}
        <a className="bg-[#ff4400] px-4  py-2 text-white rounded-full font-[500]">
        <p>{user?.displayName}</p>
      </a>
      {user ? (
        <button onClick={logOut} className="btn btn-ghost">
          logout
        </button>
      ) : (
        <a>
          <CustomLink to="/login">Login</CustomLink>
        </a>
      )}
     
    </>
  );
  return (
    <div className="lg:px-12 mt-16 ">
      <div class="navbar fixed top-0 z-50 left-0  bg-gray-50">
        <div class="navbar-start w-full">
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
              class="menu menu-compact flex items-center dropdown-content mt-5 p-2 shadow bg-gray-50 w-[97vw] text-black gap-3"
            >
              {menuItem}
            </ul>
          </div>
          <div className="flex items-center justify-start">
            <img src={logo3} width="100px" alt="" />
           <h2 className="lg:text-4xl font-bold uppercase">Car Parts <span className="text-[#ff4400]">Shop</span></h2>
          </div>
        </div>
        {pathname.includes("dashboard") && (
          <label for="my-drawer-2" class=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-black ml-auto"
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
        <div class="navbar-end hidden text-gray-800 font-[500] lg:flex">
          <ul class="menu menu-horizontal p-0 items-center gap-6">{menuItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
