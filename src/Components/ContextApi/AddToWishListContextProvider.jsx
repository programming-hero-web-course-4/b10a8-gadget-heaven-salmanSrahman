import React, { createContext, useState } from "react";

export const AddToWishListContext = createContext();

const AddToWishListContextProvider = ({ children }) => {
  const [addToWishListProdct, setAddToWishListProduct] = useState([]);

  const handleAddToWishList = (productId) => {
    console.log(productId);
  };

  return (
    <AddToWishListContext.Provider
      value={{ handleAddToWishList, addToWishListProdct }}
    >
      {children}
    </AddToWishListContext.Provider>
  );
};

export default AddToWishListContextProvider;
