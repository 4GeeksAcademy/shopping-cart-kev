import React, { useState } from "react";
import productos from "../listProducts";
import Navbar from "./navBar";
import Card from "./card";
import Footer from "./footer";
const Home = () => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const handleNewProduct = (product) => {
    if (shoppingCart.find((element) => element.id === product.id)) {
      return;
    }
    const newCart = [...shoppingCart, product];
    setShoppingCart(newCart);
  };
  console.log("renderizado home.jsx");
  return (
    <>
      <Navbar />
      <div className="container">
        <div>
          <p>carrito {shoppingCart.length}</p>
        </div>
        <div className="row gap-5">
          {productos.map((product) => {
            return (
              <Card
                key={product.id}
                image={product.image_url}
                category={product.categoria}
                price={product.precio}
                content={product.content}
                title={product.title}
                handleNewProduct={handleNewProduct}
                id={product.id}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
