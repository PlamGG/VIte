import React from "react";
import { Link } from "react-router-dom";

const Size = () => {
  return (
    <div>
      <div className="flex justify-center ">
        <h1 className="font-bold text-4xl">Sizechart – ตารางไซซ์</h1>
      </div>
      <div className="flex flex-col justify-center items-center mx-auto mt-10 space-y-4">
        <img src="src/assets/mens-size.jpg" alt="" />
        <img src="src/assets/womens-size.jpg" alt="" />
      </div>
    </div>
  );
};

export default Size;
