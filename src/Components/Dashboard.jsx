import React, { useContext, useState } from "react";
import Container from "./Container";
import WishListProduct from "./WishListProduct";
import CartProduct from "./CartProduct";
import { useLoaderData } from "react-router-dom";

const Dashboard = () => {
  const [active, setActive] = useState("Cart");

  const products = useLoaderData();

  const handleActive = (active) => {
    setActive(active);
  };

  return (
    <div>
      <div className="py-8 text-center bg-primary">
        <Container>
          <h1 className="mb-4 text-xl font-bold text-white md:text-3xl">
            Dashboard
          </h1>
          <p className="text-base leading-7 text-white max-w-[796px] mx-auto mb-4 md:mb-8">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </Container>
        <div>
          <button
            className={`${
              active === "Cart"
                ? "bg-white text-primary"
                : "ring-2 ring-white ring-inset text-white"
            } px-16 py-3 text-lg font-bold  rounded-[32px]  mr-6`}
            onClick={() => handleActive("Cart")}
          >
            Cart
          </button>
          <button
            className={`${
              active === "WishList"
                ? "bg-white text-primary"
                : "ring-2 ring-white ring-inset text-white"
            } px-16 py-3 text-lg font-bold  rounded-[32px]  mr-6`}
            onClick={() => handleActive("WishList")}
          >
            Wishlist
          </button>
        </div>
      </div>
      {active === "Cart" ? (
        <CartProduct products={products} />
      ) : (
        <WishListProduct products={products} />
      )}
    </div>
  );
};

export default Dashboard;
