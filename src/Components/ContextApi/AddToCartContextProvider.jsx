import React, { createContext, useState } from "react";

export const AddToCartContext = createContext();

const AddToCartContextProvider = ({ children }) => {
  const [addToCartProduct, setAddToCartProduct] = useState([]);

  const handleAddToCart = (product) => {
    const newAddedProduct = [...addToCartProduct, product];
    setAddToCartProduct(newAddedProduct);
  };
  console.log(addToCartProduct.length);
  return (
    <AddToCartContext.Provider value={{ addToCartProduct, handleAddToCart }}>
      {children}
    </AddToCartContext.Provider>
  );
};

export default AddToCartContextProvider;
