import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import { RxCross2 } from "react-icons/rx";
import { GrSort } from "react-icons/gr";
import { AddToWishListContext } from "./ContextApi/AddToWishListContextProvider";

const WishListProduct = ({ products }) => {
  const { addToWishListProdct, setAddToWishListProduct } =
    useContext(AddToWishListContext);

  const [wishListedProducts, setWishListedProducts] = useState([]);

  useEffect(() => {
    const wishListed = addToWishListProdct.map((id) =>
      products.find((product) => parseInt(product.product_id) === parseInt(id))
    );

    setWishListedProducts(wishListed);
  }, [addToWishListProdct]);

  const handleRemoveFromWishList = (productId) => {
    const restWishListProduct = addToWishListProdct.filter(
      (id) => parseInt(id) !== parseInt(productId)
    );
    setAddToWishListProduct(restWishListProduct);
  };

  return (
    <div>
      <div className="my-6 md:my-12">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-secondary">Wish List</h3>
            </div>
          </div>
          <div>
            {wishListedProducts.length ? (
              wishListedProducts.map((product) => (
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
                        onClick={() =>
                          handleRemoveFromWishList(product.product_id)
                        }
                      />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="my-10 text-2xl text-center text-red-500">
                No product added in wish list!
              </h1>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default WishListProduct;
