import React from "react";
import Products from "./Products";
import Container from "./Container";

const Gadgets = () => {
  return (
    <div className="bg-gray py-20">
      <Container>
        <div>
          <h1 className="text-[40px] font-bold text-secondary text-center mb-12">
            Explore Cutting-Edge Gadgets
          </h1>
          <div className="">
            <Products />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Gadgets;
