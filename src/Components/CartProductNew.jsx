import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import { RxCross2 } from "react-icons/rx";
import { GrSort } from "react-icons/gr";
import { AddToCartContext } from "./ContextApi/AddToCartContextProvider";

const CartProduct = ({ products }) => {
  const { addToCartProduct, setAddToCartProduct } =
    useContext(AddToCartContext);

  // Create a derived state to display cart products
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    // Map product IDs in `addToCartProduct` to actual product objects
    const derivedCartProducts = addToCartProduct
      .map((id) => products.find((product) => product.product_id === id))
      .filter(Boolean); // Remove undefined values (if product is not found)

    // Only update the state if `derivedCartProducts` is different
    if (
      derivedCartProducts.length !== cartProducts.length ||
      !derivedCartProducts.every(
        (product, index) => product === cartProducts[index]
      )
    ) {
      setCartProducts(derivedCartProducts);
    }
  }, [products, addToCartProduct]); // Safe dependencies

  // Handle removing products from the cart
  const handleRemoveFromCart = (productId) => {
    const updatedCart = addToCartProduct.filter((id) => id !== productId);
    setAddToCartProduct(updatedCart); // Update the cart state
  };

  // Total price calculation
  const totalPrice = cartProducts.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div>
      <div className="my-6 md:my-12">
        <Container>
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-secondary">Cart</h3>
            <div className="flex items-center gap-x-4">
              <h3 className="text-2xl font-bold text-secondary">
                Total cost: ${totalPrice.toFixed(2)}
              </h3>
              <button className="px-12 py-4 text-lg font-semibold text-white ring-2 ring-inset ring-primary rounded-3xl bg-primary">
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
        </Container>
      </div>
    </div>
  );
};

export default CartProduct;
