import React from "react";
import Container from "./Container";
import banner from "../assets/banner.jpg";

const Hero = () => {
  return (
    <div className="relative">
      <div className="bg-primary/60 pt-8 pb-8  md:pb-[268px]">
        <Container>
          <div>
            <h1 className="text-2xl md:text-[56px] md:leading-[70px] font-bold mb-8 text-white text-center">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="text-sm text-center text-white max-w-[796px] mx-auto leading-7 mb-8">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="px-7 py-3 bg-base-100 text-primary rounded-3xl text-xl font-bold shadow-inner flex justify-center text-center mx-auto">
              Shop Now
            </button>
          </div>
          <div></div>
        </Container>
      </div>
      <div className="hidden md:block absolute top-[70%] left-0 w-full rounded-3xl">
        <img
          src={banner}
          alt=""
          className="w-[1062px] h-[563px]  mx-auto rounded-[30px] p-6 ring-2 ring-white/30 ring-inset"
        />
      </div>
    </div>
  );
};

export default Hero;
