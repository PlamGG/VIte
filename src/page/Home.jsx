import React from "react";
import { Link } from "react-router-dom";
import ToTop from "../components/totop";

export default function home() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-auto space-y-4">
        <Link to="/">
          <img src="src/assets/Banner.jpg" alt="" />
        </Link>
        <Link to="/">
          <img className="" src="src/assets/Banner.jpg" alt="" />
        </Link>
        <Link to="/">
          <img className="" src="src/assets/Banner.jpg" alt="" />
        </Link>
        <Link to="/">
          <img className="" src="src/assets/Banner.jpg" alt="" />
        </Link>
        <ToTop />
      </div>
    </div>
  );
}
