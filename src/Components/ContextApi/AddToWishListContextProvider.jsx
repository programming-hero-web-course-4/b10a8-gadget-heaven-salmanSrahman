import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AddToWishListContext = createContext();

const AddToWishListContextProvider = ({ children }) => {
  const [addToWishListProdct, setAddToWishListProduct] = useState([]);

  const handleAddToWishList = (productId) => {
    const addedWishProduct = addToWishListProdct.find(
      (product_Id) => parseInt(product_Id) === parseInt(productId)
    );

    if (addedWishProduct) {
      toast.error("Product added to wish list.", {
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
      const newWishListed = [...addToWishListProdct, productId];
      setAddToWishListProduct(newWishListed);
      toast.success("Product is added wish list.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
