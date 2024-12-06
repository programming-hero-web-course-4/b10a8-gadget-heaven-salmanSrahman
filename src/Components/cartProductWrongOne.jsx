import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import { RxCross2 } from "react-icons/rx";
import { GrSort } from "react-icons/gr";
import { AddToCartContext } from "./ContextApi/AddToCartContextProvider";

const CartProduct = ({ products }) => {
  const { addToCartProduct, setAddToCartProduct } =
    useContext(AddToCartContext);

  // console.log("before", addToCartProduct);
  // console.log("before", products);
  console.log(products);

  useEffect(() => {
    const initialCartAddedProducts = products.filter((product) =>
      addToCartProduct.includes(product.product_id)
    );
    setAddToCartProduct(initialCartAddedProducts);
  }, []);

  // const handleRemoveFromCart = (productId) => {
  //   const existProductList = addToCartProduct.filter(
  //     (product) => parseInt(product.product_id) !== parseInt(productId)
  //   );
  //   setAddToCartProduct(existProductList);
  // };

  // console.log("after", addToCartProduct);
  // console.log("after", products);

  //   const totalPrice = addToCartProduct.reduce((total, product) => {
  //     return total + product.price;
  //   }, 0);

  //   console.log(totalPrice);

  return (
    <div>
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
            {addToCartProduct.length ? (
              addToCartProduct.map((product) => (
                <div
                  className="flex gap-5 p-8 my-8 bg-white rounded-md shadow"
                  key={product.product_id}
                >
                  <div className="w-2/12">
                    <img
                      src={product.product_image}
                      alt=""
                      className="w-[200px] h-[124px] rounded-md"
                    />
                  </div>
                  <div className="flex justify-between w-10/12">
                    <div>
                      <h1 className="mb-3 text-xl font-semibold text-secondary">
                        {product.product_title}
                      </h1>
                      <p className="mb-3 text-lg text-secondary/60">
                        {product.description}
                      </p>
                      <h3 className="mb-3 text-lg font-semibold text-secondary/80">
                        Price: ${product.price}
                      </h3>
                    </div>
                    <div>
                      <RxCross2
                        className="text-2xl font-medium text-red-500 cursor-pointer"
                        // onClick={() => handleRemoveFromCart(product.product_id)}
                      />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="my-10 text-2xl text-center text-red-500">
                No product added in cart!
              </h1>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CartProduct;
