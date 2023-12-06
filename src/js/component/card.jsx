import React from "react";
import Proptypes from "prop-types";

const Card = ({
  title,
  image,
  category,
  price,
  content,
  handleNewProduct,
  id,
}) => {
  console.log("renderizado Card.jsx");

  return (
    <>
      <div className="card">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="fw-2">{category}</p>
          <p className="card-text">{content}</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              handleNewProduct({
                title,
                image,
                category,
                price,
                content,
                id,
              });
            }}
          >
            Agregar - ${price}
          </button>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  title: Proptypes.string,
  image: Proptypes.string,
  category: Proptypes.string,
  price: Proptypes.number,
  content: Proptypes.string,
};

export default Card;
