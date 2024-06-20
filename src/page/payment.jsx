import React from "react";

export default function Payment() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">เลือกบัญชีที่โอนเข้า</h2>
        <table className="w-full border-collapse border border-zinc-300">
          <thead>
            <tr className="bg-zinc-100">
              <th className="border border-zinc-300 p-2"></th>
              <th className="border border-zinc-300 p-2">ชื่อธนาคาร</th>
              <th className="border border-zinc-300 p-2">ชื่อบัญชี</th>
              <th className="border border-zinc-300 p-2">เลขบัญชี</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-zinc-300 p-2 text-center">
                <input type="radio" name="account" />
              </td>
              <td className="border border-zinc-300 p-2">
                <img
                  src="https://placehold.co/20x20"
                  alt="bank logo"
                  className="inline-block mr-2"
                />
                ธนาคารxxxxxxx
              </td>
              <td className="border border-zinc-300 p-2 text-green-600">
                xxxxxxxxxxx
              </td>
              <td className="border border-zinc-300 p-2 text-red-600">
                xxxxxxxxxxx
              </td>
            </tr>
            {/* รายการบัญชีอื่น ๆ ที่นี่ */}
          </tbody>
        </table>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">ข้อมูลลูกค้า</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">
              ผู้โอน <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-zinc-300 p-2"
              placeholder="ชื่อ - สกุล"
            />
          </div>
          <div>
            <label className="block mb-1">
              เบอร์โทร <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-zinc-300 p-2"
              placeholder="099-999-9999"
            />
          </div>
          <div>
            <label className="block mb-1">
              อีเมล์ <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              className="w-full border border-zinc-300 p-2"
              placeholder="youmail@example.com"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">ข้อมูลการชำระเงิน</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">เลขที่สั่งซื้อ #</label>
            <input
              type="text"
              className="w-full border border-zinc-300 p-2"
              placeholder="xxx..."
            />
          </div>
          <div>
            <label className="block mb-1">จำนวนเงิน</label>
            <input
              type="text"
              className="w-full border border-zinc-300 p-2"
              placeholder="0.00"
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-1">อัปโหลดสลิป</label>
            <input type="file" className="file-input w-full max-w-xs" />
          </div>
          <div className="col-span-2">
            <label className="block mb-1">รายละเอียดเพิ่มเติม</label>
            <textarea
              className="w-full border border-zinc-300 p-2"
              rows="4"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <button className="bg-black text-white px-4 py-2">
          แจ้งการชำระเงิน
        </button>
        <button className="bg-zinc-800 text-white px-4 py-2">รีเซ็ต</button>
      </div>
    </div>
  );
}
