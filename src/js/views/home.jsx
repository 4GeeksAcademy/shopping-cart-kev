import React, { useState } from "react";
import Navbar from "../component/navBar";
import Footer from "../component/footer";
import Products from "../component/products";
const Home = () => {
  return (
    <>
      <div className="container">
        <Products />
      </div>

      <Footer />
    </>
  );
};

export default Home;
