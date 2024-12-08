import React, { useContext } from "react";
import Container from "./Container";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AddToCartContext } from "./ContextApi/AddToCartContextProvider";
import { AddToWishListContext } from "./ContextApi/AddToWishListContextProvider";

const Navbar = () => {
  const { addToCartProduct } = useContext(AddToCartContext);

  const { addToWishListProdct } = useContext(AddToWishListContext);

  const location = useLocation();
  console.log(location.pathname === "/");

  const navList = (
    <>
      <li>
        <NavLink
          to="/"
          className={`${
            location.pathname === "/" ? "text-gray" : "text-secondary"
          } text-sm font-medium`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/statistics"
          className={`${
            location.pathname === "/" ? "text-gray" : "text-secondary"
          } text-sm font-medium`}
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={`${
            location.pathname === "/" ? "text-gray" : "text-secondary"
          } text-sm font-medium`}
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div className={`${location.pathname === "/" ? "bg-primary" : "bg-white"}`}>
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
                  className="w-5 h-5"
                  fill="none bg-red-600"
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
                className={`${
                  location.pathname === "/"
                    ? "bg-base-100 !text-primary"
                    : "bg-primary text-base-100"
                } menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow`}
              >
                {navList}
              </ul>
            </div>
            <Link
              to="/"
              className={`${
                location.pathname === "/" ? "text-base-100" : "text-secondary"
              } text-xl font-bold`}
            >
              Gadget Heaven
            </Link>
          </div>
          <div className="hidden navbar-center lg:flex">
            <ul className="px-1 menu menu-horizontal">{navList}</ul>
          </div>
          <div className="navbar-end">
            <span className="w-[48px] h-[48px] leasing-[48px] bg-base-100 text-secondary rounded-full flex justify-center items-center mr-4 relative border border-solid border-secondary/10">
              <HiOutlineShoppingCart className="text-xl" />
              <span className="absolute top-0 right-0 z-50 p-1 text-sm font-bold text-red-500">
                {addToCartProduct.length}
              </span>
            </span>
            <span className="w-[48px] h-[48px] leasing-[48px] bg-base-100 text-secondary rounded-full flex justify-center items-center mr-4 relative border border-solid border-secondary/10">
              <FaRegHeart className="text-xl" />
              <span className="absolute top-0 right-0 z-50 p-1 text-sm font-bold text-red-500">
                {addToWishListProdct.length}
              </span>
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
