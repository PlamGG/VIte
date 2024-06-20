import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ cards, onAddToCart }) => {
  const navigate = useNavigate();

  const cardStyle = {
    margin: "20px",
    width: "calc(30% - 40px)",
    boxSizing: "border-box",
  };

  const cardContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: "2rem",
  };

  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "contain",
  };

  const handleCardClick = (item) => {
    navigate(`/pageproduct`);
  };

  return (
    <div style={cardContainerStyle}>
      {cards.map((item, index) => (
        <div
          key={index}
          className="card card-compact bg-base-100 shadow-xl"
          style={cardStyle}
          onClick={() => handleCardClick(item)}
        >
          <figure>
            <img src={item.img} alt={item.title} style={imageStyle} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p className="Price">฿{item.Price}</p>
            <p className="Category">{item.category}</p>
            <p className="Reviews">Reviews: {item.reviews}</p>
            <div className="card-actions justify-end">
              <div className="tooltip" data-tip="เพิ่มแล้ว">
                <button
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.stopPropagation(); // ป้องกันการนำทางเมื่อคลิกปุ่ม
                    onAddToCart(item);
                  }}
                >
                  ใส่ตะกร้า
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
