import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import Layout from "./components/Layout/Layout.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

import ApiBridgesSdk from "./pages/ApiBridgesSdk.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/API-Bridges",
    element: <ApiBridgesSdk />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout>
      <Navbar />
    </Layout>
    <RouterProvider router={router} />
    <Layout>
      <Footer />
    </Layout>
  </React.StrictMode>
);
