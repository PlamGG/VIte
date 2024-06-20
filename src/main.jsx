import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Layout from "./components/Layout";
import Home from "./page/Home";
import Error404 from "./page/error404";
import About from "./page/about";
import Product from "./page/Product";
import "./index.css";
import Size from "./page/Size";
import Category from "./page/category";
import Payment from "./page/payment";
import Cart from "./page/cart";
import Login from "./page/Login";
import payment from "./page/payment";
import Tracking from "./page/Tracking";
import Pageproduct from "./page/Pageproduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "/product",
    element: (
      <Layout>
        <Product />
      </Layout>
    ),
  },
  {
    path: "/Size",
    element: (
      <Layout>
        <Size />
      </Layout>
    ),
  },
  {
    path: "/category",
    element: (
      <Layout>
        <Category />
      </Layout>
    ),
  },
  {
    path: "/payment",
    element: (
      <Layout>
        <Payment />
      </Layout>
    ),
  },
  {
    path: "/cart",
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
  },
  {
    path: "/Login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "/payment",
    element: (
      <Layout>
        <payment />
      </Layout>
    ),
  },
  {
    path: "/Tracking",
    element: (
      <Layout>
        <Tracking />
      </Layout>
    ),
  },
  {
    path: "/Pageproduct",
    element: (
      <Layout>
        <Pageproduct />
      </Layout>
    ),
  },

  {
    path: "*",
    element: <Error404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
