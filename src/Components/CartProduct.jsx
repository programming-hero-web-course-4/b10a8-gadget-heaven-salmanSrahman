import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import { RxCross2 } from "react-icons/rx";
import { GrSort } from "react-icons/gr";
import { AddToCartContext } from "./ContextApi/AddToCartContextProvider";
import success from "../assets/success.png";

const CartProduct = ({ products }) => {
  const { addToCartProduct, setAddToCartProduct } =
    useContext(AddToCartContext);

  const [cartProducts, setCartProducts] = useState([]);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const derivedCartProducts = addToCartProduct.map((id) =>
      products.find((product) => product.product_id === id)
    );

    if (
      derivedCartProducts.length !== cartProducts.length ||
      !derivedCartProducts.every(
        (product, index) => product === cartProducts[index]
      )
    ) {
      setCartProducts(derivedCartProducts);
    }
  }, [products, addToCartProduct]);

  const handleRemoveFromCart = (productId) => {
    const updatedCart = addToCartProduct.filter((id) => id !== productId);
    setAddToCartProduct(updatedCart);
  };

  const totalPrice = cartProducts.reduce(
    (total, product) => total + product.price,
    0
  );

  const handleSortedProduct = () => {
    console.log(cartProducts);
    const sortedProduct = [...cartProducts].sort((a, b) => b.price - a.price);
    setCartProducts(sortedProduct);
  };

  const handlePurchase = () => {
    setShowModal(true);
    console.log("Purchase");
  };
  const handlePurchaseModalClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="relative my-6 md:my-12">
        <Container>
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-secondary">Cart</h3>
            <div className="flex items-center gap-x-4">
              <h3 className="text-2xl font-bold text-secondary">
                Total cost: ${totalPrice.toFixed(2)}
              </h3>
              <div className="flex items-center gap-x-4">
                <button
                  className="flex items-center px-10 py-4 text-lg font-semibold ring-2 ring-inset ring-primary rounded-3xl text-primary gap-x-2.5"
                  onClick={handleSortedProduct}
                >
                  Sort By Price <GrSort className="font-medium" />
                </button>
              </div>
              <button
                className="px-12 py-4 text-lg font-semibold text-white ring-2 ring-inset ring-primary rounded-3xl bg-primary"
                onClick={handlePurchase}
              >
                Purchase
              </button>
            </div>
          </div>
          <div>
            {cartProducts.length > 0 ? (
              cartProducts.map((product) => (
                <div
                  className="flex gap-5 p-8 my-8 bg-white rounded-md shadow"
                  key={product.product_id}
                >
                  <div className="w-2/12">
                    <img
                      src={product.product_image}
                      alt={product.product_title}
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
                        Price: ${product.price}
                      </h3>
                    </div>
                    <div>
                      <RxCross2
                        className="text-2xl font-medium text-red-500 cursor-pointer"
                        onClick={() => handleRemoveFromCart(product.product_id)}
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

          {showModal && (
            <div className="absolute top-0 left-0 flex items-center justify-center p-8 mx-auto text-center border border-solid rounded-md shadow bg-gray border-secondary/10">
              <div className="flex items-center justify-center">
                <div>
                  <img src={success} alt="" className="mx-auto" />
                  <h1 className="my-6 text-2xl font-bold text-secondary ">
                    Payment Successfully
                  </h1>
                  <h4 className="text-base font-medium text-secondary/60">
                    Thanks for purchasing.{" "}
                    <span className="block mt-2">Total:2449.96</span>
                  </h4>
                  <button
                    onClick={handlePurchaseModalClose}
                    className="bg-[#110000]/10 p-2 w-full rounded-xl my-4 text-base font-medium text-secondary"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default CartProduct;