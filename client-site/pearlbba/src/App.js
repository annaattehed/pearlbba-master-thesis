import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import Products from "./pages/Products/Products";
import Product from "./pages/Product-single/Product";
import "./app.scss";
// import "./index.css";

const Layout = () =>{
  return(
    <div className="page-layout">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout />,
    children:[
      {
        path: "/",
        element:<Homepage />,
      },
      {
        path: "/products/:id",
        element:<Products />,
      },
      {
        path: "/product/:id",
        element:<Product />,
      },
    ],
  },

]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
