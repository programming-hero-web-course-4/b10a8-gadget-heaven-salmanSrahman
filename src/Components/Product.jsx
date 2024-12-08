import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { product_title, product_image, price, product_id } = product;

  return (
    <div>
      <div className="p-5 bg-white rounded-xl">
        <div className="h-[300px] w-full rounded-xl">
          <img
            src={product_image}
            alt=""
            className="w-full h-full rounded-xl"
          />
        </div>
        <h3 className="text-xl font-semibold text-secondary mt-5 mb-2.5">
          {product_title}
        </h3>
        <h4 className="mb-4 text-lg font-semibold text-secondary/60">
          Price: {price}
        </h4>
        <Link to={`/product/${product_id}`}>
          <button className="px-6 py-3 font-medium rounded-xl text-md text-primary ring-2 ring-primary ring-inset">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
