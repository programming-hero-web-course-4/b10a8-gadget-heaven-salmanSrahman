import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AddToCartContext = createContext();

const AddToCartContextProvider = ({ children }) => {
  const [addToCartProduct, setAddToCartProduct] = useState([]);

  const handleAddToCart = (productId, availability) => {
    console.log(availability);
    const existProduct = addToCartProduct.find(
      (id) => parseInt(id) === productId
    );

    if (existProduct) {
      toast.error("Product already added in cart.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (availability === false) {
      toast.error("Sorry! this product is out of stock.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const newAddedProduct = [...addToCartProduct, productId];
      setAddToCartProduct(newAddedProduct);
    }
  };
  return (
    <AddToCartContext.Provider value={{ addToCartProduct, handleAddToCart }}>
      {children}
    </AddToCartContext.Provider>
  );
};

export default AddToCartContextProvider;
