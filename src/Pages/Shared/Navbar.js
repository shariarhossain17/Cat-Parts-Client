import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth)
  const logOut = () => {
    signOut(auth)
  }
  const menuItem = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      {
        user ? <button onClick={logOut} className="btn btn-ghost">logout</button> :  <li>
        <NavLink to='/login'>Login</NavLink>
      </li>
      }
    </>
  );
  return (
    <div className="lg:px-12 bg-[#242c32]">
      <div class="navbar ">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-secondary lg:hidden">
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
              class="menu menu-compact flex items-center dropdown-content mt-3 p-2 shadow bg-[#242c32]  w-[97vw] text-white"
            >
              {menuItem}
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl text-white">daisyUI</a>
        </div>
        <div class="navbar-end hidden text-white lg:flex">
          <ul class="menu menu-horizontal p-0">
           {menuItem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
