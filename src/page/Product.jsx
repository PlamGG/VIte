// src/page/Product.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/card";
import data from "../data";

const ProductPage = ({ onAddToCart }) => {
  const [products, setProducts] = useState(data); // State เพื่อเก็บข้อมูลสินค้า
  const [sortBy, setSortBy] = useState("popular"); // State เพื่อเก็บค่าการเรียงลำดับ (ค่าเริ่มต้นเรียงตามความนิยม)
  const [currentPage, setCurrentPage] = useState(1); // State เพื่อเก็บหน้าปัจจุบัน
  const itemsPerPage = 12; // จำนวนสินค้าที่จะแสดงต่อหน้า

  const handleChangeSort = (e) => {
    setSortBy(e.target.value); // เปลี่ยน state เมื่อมีการเปลี่ยนแปลงใน dropdown
  };

  useEffect(() => {
    const sortedProducts = sortedCards();
    setProducts(sortedProducts);
  }, [sortBy]);

  const sortedCards = () => {
    switch (sortBy) {
      case "popular":
        return [...data].sort(
          (a, b) => parseInt(b.reviews) - parseInt(a.reviews)
        ); // แปลงสตริงเป็นตัวเลข
      case "latest":
        return [...data].reverse(); // เรียงตามลำดับล่าสุด (ข้อมูลล่างขึ้นบน)
      case "lowToHigh":
        return [...data].sort((a, b) => a.Price - b.Price); // เรียงจากราคาต่ำไปสูง
      case "highToLow":
        return [...data].sort((a, b) => b.Price - a.Price); // เรียงจากราคาสูงไปต่ำ
      default:
        return [...data]; // ค่าเริ่มต้นเรียงตามความนิยม
    }
  };

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center my-4">
        <h1 className="font-bold text-4xl">สินค้าทั้งหมด</h1>
      </div>
      <div className="flex justify-center items-start space-x-4">
        <div>
          <ul className="menu bg-base-200 sm:w-56 rounded-box">
            <li className="menu-title">หมวดหมู่สินค้า</li>
            {/* รายการหมวดหมู่ */}
            <li>
              <Link to="/Product">Item 1</Link>
            </li>
            <li>
              <Link to="#">Item 2</Link>
            </li>
            <li>
              <Link to="#">Item 3</Link>
            </li>
            <li>
              <Link to="#">Parent</Link>
              <ul>
                <li>
                  <Link to="#">Submenu 1</Link>
                </li>
                <li>
                  <Link to="#">Submenu 2</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">Item 5</Link>
            </li>
            <li>
              <Link to="#">Item 6</Link>
            </li>
            <li>
              <Link to="#">Item 7</Link>
            </li>
            <li>
              <Link to="#">Item 8</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-sm breadcrumbs">
              <ul className="flex">
                <li className="mr-1">
                  <a href="#">Home</a>
                </li>
                <li className="mr-1">
                  <a href="#">Product</a>
                </li>
                <li>Page1</li>
              </ul>
            </div>
            <select
              className="select w-full max-w-xs"
              value={sortBy}
              onChange={handleChangeSort}
            >
              <option value="popular">เรียงตามความนิยม</option>
              <option value="latest">เรียงตามลำดับล่าสุด</option>
              <option value="lowToHigh">เรียงตามราคา : ต่ำไปสูง</option>
              <option value="highToLow">เรียงตามราคา : สูงไปต่ำ</option>
            </select>
          </div>
          <Card cards={currentProducts} onAddToCart={onAddToCart} />{" "}
          {/* ส่งการ์ดที่เรียงลำดับแล้วไปยัง Card component */}
        </div>
      </div>
      <div className="join flex justify-center mt-10">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`join-item btn btn-square ${
              currentPage === index + 1 ? "btn-active" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
