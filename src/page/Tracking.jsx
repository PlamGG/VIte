import React from "react";

export default function Tracking() {
  return (
    <dir className="container mx-auto">
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          ติดตามสถานะสิ่งของ
        </h1>
        <p className="text-center mb-4 text-gray-600 dark:text-gray-300">
          กรอกหมายเลขสิ่งของ 13 หลัก [ตัวอย่าง : EF582568151ez]
        </p>
        <textarea
          className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 mb-4"
          rows="3"
          placeholder="EG552124083ez"
        ></textarea>
        <p className="text-sm mb-2 text-gray-600 dark:text-gray-300">
          * กรุณาใส่ , (Comma) คั่นหมายเลขสิ่งของ กรณีติดตามมากกว่า 1 รายการ
        </p>
        <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">
          (ตัวอย่าง : EF582621151ez, EA666458151ez, RG453678925ez)
          สามารถใส่ได้สูงสุด 10 รายการต่อครั้ง
        </p>
        <div className="flex items-center mb-4">
          <button className="btn btn-error text-white">ค้นหา</button>
        </div>
      </div>
    </dir>
  );
}
