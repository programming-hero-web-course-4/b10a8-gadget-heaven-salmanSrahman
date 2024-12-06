import React, { createContext, useState } from "react";

export const AddToWishListContext = createContext();

const AddToWishListContextProvider = ({ children }) => {
  const [addToWishListProdct, setAddToWishListProduct] = useState([]);

  const handleAddToWishList = (productId) => {
    const addedWishProduct = addToWishListProdct.find(
      (product_Id) => parseInt(product_Id) === parseInt(productId)
    );

    if (addedWishProduct) {
      alert("Product added to wish list.");
    } else {
      const newWishListed = [...addToWishListProdct, productId];
      setAddToWishListProduct(newWishListed);
    }
  };

  return (
    <AddToWishListContext.Provider
      value={{
        handleAddToWishList,
        setAddToWishListProduct,
        addToWishListProdct,
      }}
    >
      {children}
    </AddToWishListContext.Provider>
  );
};

export default AddToWishListContextProvider;
