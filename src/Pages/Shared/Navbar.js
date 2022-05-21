import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const menuItem = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
      </li>
    </>
  );
  return (
    <div className="lg:px-12 ">
      <div class="navbar   ">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
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
              class="menu menu-compact flex items-center dropdown-content mt-3 p-2 shadow bg-[rgb(234,238,241)]  w-[97vw] text-[#242c32]"
            >
              {menuItem}
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl ">daisyUI</a>
        </div>
        <div class="navbar-end hidden  lg:flex">
          <ul class="menu menu-horizontal p-0">
           {menuItem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
