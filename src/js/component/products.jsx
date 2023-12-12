import React, { useState, useEffect } from "react";
import productos from "../listProducts";
import Card from "./card";
import ModalCart from "./modalCart";

const Products = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [products, setProducts] = useState([]);

  const apiEndpoint = "https://rickandmortyapi.com/api/character";

  async function getProducts() {
    const response = await fetch(apiEndpoint);
    const character = await response.json();
    console.log(character.results);
    setProducts(character.results);
  }

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
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="row gap-5">
        {products.map((product) => {
          return (
            <Card
              key={product.id}
              image={product.image}
              category={product.species}
              price={product.id}
              content={product.gender}
              title={product.name}
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
