import React from "react";
import banner from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div>
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

export default Banner;
