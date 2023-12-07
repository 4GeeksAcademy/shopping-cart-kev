import React, { useState } from "react";
import productos from "../listProducts";
import Card from "./card";
import ModalCart from "./modalCart";

const Products = () => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const handleNewProduct = (product) => {
    if (shoppingCart.find((element) => element.id === product.id)) {
      return;
    }
    const newCart = [...shoppingCart, product];
    setShoppingCart(newCart);
  };

  const removeProduct = (product) => {
    const newCart = shoppingCart.filter((element) => element.id !== product.id);
    setShoppingCart(newCart);
  };

  return (
    <>
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
      <ModalCart shoppingCart={shoppingCart} removeProduct={removeProduct} />
    </>
  );
};

export default Products;
