// Card.jsx
import React from "react";

const Card = ({ product, onAddToCart }) => {
  const { id, name, price, image } = product;

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-price">{price} ฿</p>
        <button className="btn btn-primary" onClick={handleAddToCart}>
          เพิ่มเข้าตะกร้า
        </button>
      </div>
    </div>
  );
};

export default Card;
