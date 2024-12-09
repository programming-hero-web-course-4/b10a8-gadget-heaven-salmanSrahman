import React from "react";
import { Helmet } from "react-helmet-async";
import error from "../assets/404.gif";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Helmet>
        <title>GadgetHeaven | Not Found</title>
      </Helmet>
      <div className="flex justify-center py-20 mx-auto my-5">
        <img src={error} alt="" className="h-[300px]" />
      </div>
      <button className="flex items-center justify-center px-10 py-3 mx-auto text-white rounded-md bg-primary">
        <Link to="/">Back To Home Page</Link>
      </button>
    </div>
  );
};

export default NotFound;
