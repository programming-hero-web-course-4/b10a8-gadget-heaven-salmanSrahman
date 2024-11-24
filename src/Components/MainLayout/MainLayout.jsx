import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const MainLayout = () => {
  return (
    <div className="font-sora">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
