import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="flex gap-6">
      <div className="w-2/12">
        <div className="p-6 rounded-xl ring-2 ring-secondary/10 ring-inset">
          <button className="py-3 px-6 bg-primary rounded-xl text-lg font-semibold text-white flex justify-center mb-6 w-full">
            All Product
          </button>
          <button className="py-3 px-6 bg-secondary/10 rounded-xl text-lg font-semibold text-secondary/60 flex justify-center mb-6 w-full">
            Laptops
          </button>
          <button className="py-3 px-6 bg-secondary/10 rounded-xl text-lg font-semibold text-secondary/60 flex justify-center mb-6 w-full">
            Phones
          </button>
          <button className="py-3 px-6 bg-secondary/10 rounded-xl text-lg font-semibold text-secondary/60 flex justify-center mb-6 w-full">
            Accessories
          </button>
        </div>
      </div>
      <div className="w-10/12">
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <Product key={product.product_id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
