import React from "react";

function CenteredWidget({ children }) {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="max-w-4xl w-full p-4">{children}</div>
    </div>
  );
}

export default function Widget() {
  return (
    <CenteredWidget>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">ตะกร้าสินค้า</h1>
        <div className="overflow-x-auto ">
          <table className="min-w-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 ">
            <thead>
              <tr className="bg-zinc-100 dark:bg-zinc-700">
                <th className="py-2 px-4 border-b border-zinc-200 dark:border-zinc-700">
                  สินค้า
                </th>
                <th className="py-2 px-4 border-b border-zinc-200 dark:border-zinc-700">
                  ราคา
                </th>
                <th className="py-2 px-4 border-b border-zinc-200 dark:border-zinc-700">
                  จำนวน
                </th>
                <th className="py-2 px-4 border-b border-zinc-200 dark:border-zinc-700">
                  ยอดรวม
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-zinc-200 dark:border-zinc-700">
                <td className="py-2 px-4 flex items-center">
                  <img
                    src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
                    alt="Product Image"
                    className="w-20 h-16 mr-4"
                  />
                  <span>รองเท้าสวยๆ</span>
                </td>
                <td className="py-2 px-4">150.00 ฿</td>
                <td className="py-2 px-4">
                  <div className="flex items-center">
                    <button className="px-2 py-1 border border-zinc-300 dark:border-zinc-600">
                      -
                    </button>
                    <input
                      type="text"
                      value="1"
                      className="w-12 text-center mx-2 border border-zinc-300 dark:border-zinc-600"
                    />
                    <button className="px-2 py-1 border border-zinc-300 dark:border-zinc-600">
                      +
                    </button>
                  </div>
                </td>
                <td className="py-2 px-4">150.00 ฿</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-4">
          <button className="btn">ปรับปรุงสินค้าในตะกร้า</button>
        </div>
      </div>
      <div className="mt-8 p-4 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 max-w-sm">
        <h2 className="text-2xl font-bold mb-4">ยอดรวม</h2>
        <div className="flex flex-col space-y-6">
          <div className="flex justify-between">
            <span>ยอดรวม</span>
            <span>150.00 ฿</span>
          </div>
          <div className="flex justify-between">
            <span>ส่วนลด 10%</span>
            <span>-15.00 ฿</span>
          </div>
          <div className="flex justify-between">
            <span>การจัดส่ง</span>
            <span>40.00 ฿</span>
          </div>
          <div className="flex justify-between">
            <span>รวม</span>
            <span>175.00 ฿</span>
          </div>
          <button class="bg-black text-white btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
            ดำเนินการสั่งซื้อ
          </button>
        </div>
      </div>
    </CenteredWidget>
  );
}
