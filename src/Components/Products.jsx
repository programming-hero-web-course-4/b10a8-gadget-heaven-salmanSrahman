import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setAllProducts(data);
      });
  }, []);

  const handleSortCategory = (category) => {
    setActiveCategory(category);

    if (category === "All") {
      setAllProducts(products);
    } else {
      const sortedCategory = products.filter((product) =>
        product.category.includes(category)
      );
      setAllProducts(sortedCategory);
    }
  };

  return (
    <div className="flex gap-6">
      <div className="w-2/12">
        <div className="p-6 rounded-xl ring-2 ring-secondary/10 ring-inset">
          <button
            className={`${
              activeCategory === "All"
                ? "text-white bg-primary"
                : "bg-secondary/10 text-secondary/60"
            } flex justify-center w-full px-6 py-3 mb-6 text-lg font-semibold rounded-xl`}
            onClick={() => handleSortCategory("All")}
          >
            All Product
          </button>
          <button
            className={`${
              activeCategory === "Laptop"
                ? "text-white bg-primary"
                : "bg-secondary/10 text-secondary/60"
            } flex justify-center w-full px-6 py-3 mb-6 text-lg font-semibold rounded-xl`}
            onClick={() => handleSortCategory("Laptop")}
          >
            Laptops
          </button>
          <button
            className={`${
              activeCategory === "Phones"
                ? "text-white bg-primary"
                : "bg-secondary/10 text-secondary/60"
            } flex justify-center w-full px-6 py-3 mb-6 text-lg font-semibold rounded-xl`}
            onClick={() => handleSortCategory("Phones")}
          >
            Phones
          </button>
          <button
            className={`${
              activeCategory === "Accessory"
                ? "text-white bg-primary"
                : "bg-secondary/10 text-secondary/60"
            } flex justify-center w-full px-6 py-3 mb-6 text-lg font-semibold rounded-xl`}
            onClick={() => handleSortCategory("Accessory")}
          >
            Accessories
          </button>
          <button
            className={`${
              activeCategory === "Smart Watches"
                ? "text-white bg-primary"
                : "bg-secondary/10 text-secondary/60"
            } flex justify-center w-full px-6 py-3 mb-6 text-lg font-semibold rounded-xl`}
            onClick={() => handleSortCategory("Smart Watches")}
          >
            Watch
          </button>
        </div>
      </div>
      <div className="w-10/12">
        <div className="grid grid-cols-3 gap-4">
          {allProducts.map((product) => (
            <Product key={product.product_id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
