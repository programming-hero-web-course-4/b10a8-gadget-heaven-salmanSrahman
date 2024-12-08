import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import MainLayout from "./Components/MainLayout/MainLayout";
import Home from "./Components/Home";
import Statistics from "./Components/Statistics";
import Dashboard from "./Components/Dashboard";
import ProductDetails from "./Components/ProductDetails";
import AddToCartContextProvider from "./Components/ContextApi/AddToCartContextProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddToWishListContextProvider from "./Components/ContextApi/AddToWishListContextProvider";
import { HelmetProvider } from "react-helmet-async";

let router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "product/:productId",
        element: <ProductDetails />,
        loader: () => fetch("/products.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: () => fetch("/products.json"),
      },
      {
        path: "*",
        element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <AddToCartContextProvider>
      <AddToWishListContextProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </AddToWishListContextProvider>
    </AddToCartContextProvider>
  </HelmetProvider>
);
