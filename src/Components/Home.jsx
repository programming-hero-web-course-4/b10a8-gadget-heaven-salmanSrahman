import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Gadgets from "./Gadgets";
import Banner from "./Banner";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>GadgetHeaven | Home</title>
      </Helmet>
      <Hero />
      <Banner />
      <Gadgets />
    </div>
  );
};

export default Home;
