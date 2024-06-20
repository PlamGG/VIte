import React from "react";

function about() {
  return (
    <div className="flex justify-center ">
      <div className="max-w-screen-md w-full bg-white shadow-md rounded px-8  pb-8 mb-4">
        <h2 className="text-xl font-bold mb-4">ติดต่อเรา</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            อีเมล
          </label>
          <p className="text-gray-700">info@example.com</p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            ที่อยู่
          </label>
          <p className="text-gray-700">123 ถนน อำเภอ จังหวัด ประเทศ</p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="store"
          >
            ร้านของเรา
          </label>
          <p className="text-gray-700">เยี่ยมชมร้านของเราได้ที่ตำแหน่งร้าน</p>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="map"
          >
            แผนที่ Google
          </label>
          <iframe
            className="w-full h-80 rounded-lg"
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.214108335633!2d100.53733531452792!3d13.736797200479333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2996f5fde74d3%3A0x7b5a6429d62d7eab!2sCentral%20World!5e0!3m2!1sen!2sth!4v1624138406415!5m2!1sen!2sth"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default about;
