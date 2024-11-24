import React from "react";
import Container from "./Container";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navList = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-primary">
      <Container>
        <div className="navbar text-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navList}
              </ul>
            </div>
            <a className="font-bold text-base-100 text-xl">Gadget Heaven</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navList}</ul>
          </div>
          <div className="navbar-end">
            <span className="w-[48px] h-[48px] leasing-[48px] bg-base-100 text-secondary rounded-full flex justify-center items-center mr-4 relative border border-solid border-secondary/10">
              <HiOutlineShoppingCart className="text-xl" />
              <span className="absolute top-0 right-0 text-red-500 font-bold text-sm z-50 p-1">
                10
              </span>
            </span>
            <span className="w-[48px] h-[48px] leasing-[48px] bg-base-100 text-secondary rounded-full flex justify-center items-center mr-4 relative border border-solid border-secondary/10">
              <FaRegHeart className="text-xl" />
              <span className="absolute top-0 right-0 text-red-500 font-bold text-sm z-50 p-1">
                10
              </span>
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
