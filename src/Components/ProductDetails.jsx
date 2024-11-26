import React, { useContext, useEffect, useState } from "react";
import banner from "../assets/banner.jpg";
import { useLoaderData, useParams } from "react-router-dom";
import Container from "./Container";
import Rating from "react-rating";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AddToCartContext } from "./ContextApi/AddToCartContextProvider";
import { AddToWishListContext } from "./ContextApi/AddToWishListContextProvider";

const ProductDetails = () => {
  const loader = useLoaderData();
  const { productId } = useParams();

  const { handleAddToCart } = useContext(AddToCartContext);
  const { handleAddToWishList } = useContext(AddToWishListContext);

  const product = loader.find(
    (product) => product.product_id === parseInt(productId)
  );

  const {
    product_title,
    price,
    description,
    availability,
    rating,
    specification,
    product_id,
  } = product;

  return (
    <div>
      <Container>
        <div className="flex gap-x-8">
          <div>
            <img src={banner} alt="" className="w-[424px] h-full rounded-3xl" />
          </div>
          <div>
            <h1 className="mb-3 text-xl font-semibold text-secondary">
              {product_title}
            </h1>
            <h3 className="mb-3 text-lg font-semibold text-secondary/80">
              Price: ${price}
            </h3>
            <span
              className={`${
                availability === true
                  ? "bg-[#309C08]/10 text-[#309C08] border-[#309C08]"
                  : "bg-red-100 text-red-500 border-red-500"
              } py-2 px-4 rounded-xl border-2 border-solid text-sm font-medium mb-4 inline-block`}
            >
              {availability === true ? "In Stock" : "Out of Stock"}
            </span>
            <p className="mb-3 text-lg text-secondary/60">{description}</p>
            <div>
              <h4 className="mb-3 text-xl font-semibold text-secondary">
                Specification:
              </h4>
              {specification.map((productInfo, index) => (
                <h5
                  key={index}
                  className="mb-3 text-lg list-decimal text-secondary/50"
                >
                  {index + 1}: {productInfo}
                </h5>
              ))}
            </div>
            <div>
              <h4 className="mt-5 mb-1 text-xl font-semibold text-secondary">
                Rating:
              </h4>
              <Rating
                initialRating={rating}
                readonly
                emptySymbol={<FaStarHalfAlt />}
                fullSymbol={<FaStar />}
                className="text-[#F9C004] mb-5 text-lg"
              />
              <span className="mb-1 ml-2.5 text-base text-secondary font-bold">
                {rating}
              </span>
            </div>
            <div className="flex gap-x-2">
              <button
                className="flex items-center px-6 py-3 font-medium text-white rounded-xl text-md bg-primary gap-x-2"
                onClick={() => handleAddToCart(product_id, availability)}
              >
                <span>Add To Cart</span>
                <HiOutlineShoppingCart className="text-xl" />
              </button>
              <button
                className="btn btn-circle"
                onClick={() => handleAddToWishList(product_id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
