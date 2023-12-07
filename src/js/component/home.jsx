import React, { useState } from "react";
import Navbar from "./navBar";
import Footer from "./footer";
import Products from "./products";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Products />
      </div>

      <Footer />
    </>
  );
};

export default Home;
