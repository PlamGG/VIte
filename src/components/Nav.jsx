import React, { useState } from "react";
import { Link } from "react-router-dom";

const CartContext = React.createContext();

export default function Nav() {
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Function เพิ่มสินค้าเข้าตะกร้า
  const addToCart = (item) => {
    setCartItems([...cartItems, { ...item, qty: 1 }]);
  };

  // Function ลบสินค้าออกจากตะกร้า
  const deleteFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  // Function นับจำนวนสินค้าทั้งหมดในตะกร้า
  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.qty, 0);
  };

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest(".search-container") && showSearch) {
      setShowSearch(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        deleteFromCart,
        calculateTotalItems,
      }}
    >
      <div className="container m-auto p-5" onClick={handleOutsideClick}>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <button
              className="btn btn-ghost btn-circle"
              onClick={handleSearchToggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          <div className="navbar-center">
            <a className="text-2xl font-bold">daisyUI</a>
          </div>
          <div className="navbar-end">
            <Link to="/cart" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                <span className="badge badge-xs badge-primary bg-black indicator-item">
                  {calculateTotalItems()}
                </span>
              </div>
            </Link>
          </div>
        </div>
        {showSearch && (
          <div className="mt-2 search-container">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-full"
            />
          </div>
        )}
      </div>
    </CartContext.Provider>
  );
}

export const useCart = () => React.useContext(CartContext);
