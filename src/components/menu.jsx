import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="flex justify-center mx-auto">
      <ul className="menu lg:menu-horizontal bg-base-90 rounded-box lg:mb-64 font-bold text-base">
        <li>
          <Link to="/">หน้าแรก</Link>
        </li>
        <li>
          <details>
            <summary>สินค้าทั้งหมด</summary>
            <ul>
              <li>
                <Link to="/Product">สินค้า</Link>
              </li>
              <li>
                <Link to="/Size">ตารางไซซ์</Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <Link to="/category">หมวดหมู่สินค้า</Link>
        </li>
        <li>
          <Link to="/Tracking">สถานะสินค้า</Link>
        </li>
        <li>
          <Link to="/payment">แจ้งการชำระเงิน</Link>
        </li>
        <li>
          <Link to="/Error404">รีวิวลูกค้า</Link>
        </li>
        <li>
          <Link to="/about">ติดต่อเรา</Link>
        </li>
        <li>
          <Link to="/Login">เข้าสู่ระบบ</Link>
        </li>
        <li>
          <Link to="/cart">ตะกร้าสินค้า</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
