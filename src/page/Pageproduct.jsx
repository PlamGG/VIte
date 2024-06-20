import React, { useState } from "react";

export default function Widget() {
  const [selectedSize, setSelectedSize] = useState(""); // State สำหรับเก็บไซส์ที่เลือก

  const handleSizeClick = (size) => {
    setSelectedSize(size); // เมื่อคลิกที่ไซส์จะเซ็ตเป็นไซส์ที่เลือก
  };

  const handleClearSize = () => {
    setSelectedSize(""); // เมื่อคลิกที่ปุ่ม "Clear" จะล้างค่าไซส์ที่เลือก
  };
  const [quantity, setQuantity] = useState(1); // State เพื่อเก็บจำนวนสินค้า

  // ฟังก์ชันสำหรับเพิ่มจำนวนสินค้า
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // ฟังก์ชันสำหรับลดจำนวนสินค้า แต่ไม่ต่ำกว่า 1
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="container  flex justify-center items-start pt-4 ">
      <div className="text-sm breadcrumbs">
        <ul className="flex">
          <li className="mr-1">
            <a href="#">Home</a>
          </li>
          <li className="mr-1">
            <a href="#">Product</a>
          </li>
          <li>รองเท้าสวยๆๆ</li>
        </ul>
      </div>
      <div className="flex flex-col md:flex-row p-4 mt-10">
        {" "}
        {/* mx-auto เพื่อจัดให้อยู่ตรงกลาง */}
        <div className="relative">
          <img
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="Product Image"
            className="w-full md:w-96"
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-8 flex-1">
          <h1 className="text-5xl font-bold">รองเท้าสวยๆๆ</h1>
          <div className="mt-2 flex items-center">
            <span className="text-2xl font-bold ml-2">200.00 ฿</span>
          </div>
          <div className="mt-4">
            <span className="block mb-2">Size</span>
            <div className="flex space-x-2">
              <button
                className={`border border-transparent bg-white text-gray-700 px-4 py-2 ${
                  selectedSize === "XS"
                    ? "bg-gray-200 border border-gray-400"
                    : ""
                }`}
                onClick={() => handleSizeClick("XS")}
              >
                10
              </button>
              <button
                className={`border border-transparent bg-white text-gray-700 px-4 py-2 ${
                  selectedSize === "S"
                    ? "bg-gray-200 border border-gray-400"
                    : ""
                }`}
                onClick={() => handleSizeClick("S")}
              >
                9
              </button>
              <button
                className={`border border-transparent bg-white text-gray-700 px-4 py-2 ${
                  selectedSize === "M"
                    ? "bg-gray-200 border border-gray-400"
                    : ""
                }`}
                onClick={() => handleSizeClick("M")}
              >
                8
              </button>
              <button
                className={`border border-transparent bg-white text-gray-700 px-4 py-2 ${
                  selectedSize === "L"
                    ? "bg-gray-200 border border-gray-400"
                    : ""
                }`}
                onClick={() => handleSizeClick("L")}
              >
                7
              </button>
              {selectedSize && (
                <button
                  className="underline px-4 py-2"
                  onClick={handleClearSize}
                >
                  Clear
                </button>
              )}
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="flex border">
              <button className="px-4 py-2" onClick={decreaseQuantity}>
                -
              </button>
              <input
                type="text"
                value={quantity}
                className="w-12 text-center border-l border-r"
                readOnly
              />
              <button className="px-4 py-2" onClick={increaseQuantity}>
                +
              </button>
            </div>
            <button className="btn btn-xs bg-gray-700 text-white sm:btn-sm md:btn-md lg:btn-lg m-4">
              เพิ่มลงตะกร้า
            </button>
          </div>
          <div className="mt-4">
            <p>รหัสสินค้า: Nike Air Monarch IV</p>
            <p>หมวดหมู่: Adidas</p>
          </div>
        </div>
      </div>
    </div>
  );
}
