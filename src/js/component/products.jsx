import React, { useState } from "react";
import productos from "../listProducts";
import Card from "./card";

const Products = () => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const handleNewProduct = (product) => {
    if (shoppingCart.find((element) => element.id === product.id)) {
      return;
    }
    const newCart = [...shoppingCart, product];
    setShoppingCart(newCart);
  };

  return (
    <>
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
      <div className="cart-fab">
        <div className="container d-flex justify-content-end">
          <button className="btn btn-warning">
            <span>Modal</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
