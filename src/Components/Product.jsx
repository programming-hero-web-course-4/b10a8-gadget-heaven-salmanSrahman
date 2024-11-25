import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { product_title, product_image, price, product_id } = product;

  return (
    <div>
      <div className="rounded-xl p-5 bg-white">
        <div className="h-[181px] w-full rounded-xl">
          <img src={product_image} alt="" className="h-full rounded-xl" />
        </div>
        <h3 className="text-xl font-semibold text-secondary mt-5 mb-2.5">
          {product_title}
        </h3>
        <h4 className="text-lg font-semibold text-secondary/60 mb-4">
          Price: {price}
        </h4>
        <button className="py-3 px-6 rounded-xl text-md font-medium text-primary ring-2 ring-primary ring-inset">
          <Link to={`/product/${product_id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default Product;
