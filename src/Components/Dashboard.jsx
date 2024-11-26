import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AddToCartContext } from "./ContextApi/AddToCartContextProvider";
import Container from "./Container";
import { RxCross2 } from "react-icons/rx";
import product from "../assets/banner.jpg";
import { GrSort } from "react-icons/gr";

const Dashboard = () => {
  const products = useLoaderData();

  const { addToCartProduct } = useContext(AddToCartContext);

  console.log(addToCartProduct);

  const cartProducts = products.filter((product) =>
    addToCartProduct.includes(product.product_id)
  );
  console.log(cartProducts);

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
          <button className="px-16 py-3 text-lg font-bold bg-white rounded-[32px] text-primary mr-6">
            Cart
          </button>
          <button className="px-16 py-3 text-lg font-medium ring-2 ring-white ring-inset rounded-[32px] text-white">
            Wishlist
          </button>
        </div>
      </div>
      <div className="my-6 md:my-12">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-secondary">Cart</h3>
            </div>
            <div className="flex items-center gap-x-4">
              <h3 className="text-2xl font-bold text-secondary">
                Total cost: 999.99
              </h3>
              <button className="flex items-center px-10 py-4 text-lg font-semibold ring-2 ring-inset ring-primary rounded-3xl text-primary gap-x-2.5">
                Sort By Price <GrSort className="font-medium" />
              </button>
              <button className="px-12 py-4 text-lg font-semibold text-white ring-2 ring-inset ring-primary rounded-3xl bg-primary">
                Purchase
              </button>
            </div>
          </div>
          <div>
            <div className="flex gap-5 p-8 my-8 bg-white rounded-md shadow">
              <div className="w-2/12">
                <img
                  src={product}
                  alt=""
                  className="w-[200px] h-[124px] rounded-md"
                />
              </div>
              <div className="flex justify-between w-10/12">
                <div>
                  <h1 className="mb-3 text-xl font-semibold text-secondary">
                    Samsung Galaxy S23 Ultra
                  </h1>
                  <p className="mb-3 text-lg text-secondary/60">
                    {" "}
                    Ultra-slim, high-performance laptop with 13.4-inch Infinity
                    Edge display.
                  </p>
                  <h3 className="mb-3 text-lg font-semibold text-secondary/80">
                    Price: $ 999.99
                  </h3>
                </div>
                <div>
                  <RxCross2 className="text-2xl font-medium text-red-500 cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="flex gap-5 p-8 my-8 bg-white rounded-md shadow">
              <div className="w-2/12">
                <img
                  src={product}
                  alt=""
                  className="w-[200px] h-[124px] rounded-md"
                />
              </div>
              <div className="flex justify-between w-10/12">
                <div>
                  <h1 className="mb-3 text-xl font-semibold text-secondary">
                    Samsung Galaxy S23 Ultra
                  </h1>
                  <p className="mb-3 text-lg text-secondary/60">
                    {" "}
                    Ultra-slim, high-performance laptop with 13.4-inch Infinity
                    Edge display.
                  </p>
                  <h3 className="mb-3 text-lg font-semibold text-secondary/80">
                    Price: $ 999.99
                  </h3>
                </div>
                <div>
                  <RxCross2 className="text-2xl font-medium text-red-500 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
