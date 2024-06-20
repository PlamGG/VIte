import React from "react";

export default function Category() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center">
        <div
          className="flex items-center bg-gray-200 rounded-lg p-4 mb-4 mr-4"
          style={{ width: "1200px", height: "200px" }}
        >
          <div className="w-1/2 text-center">
            <a className="link ">Nike</a>
          </div>
          <div className="w-1/2 flex justify-end">
            <img
              src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
              alt="Image"
              className="h-full object-cover rounded-lg"
              style={{ maxWidth: "50%", maxHeight: "100%" }}
            />
          </div>
        </div>

        <div
          className="flex items-center bg-gray-200 rounded-lg p-4 mb-4 mr-4"
          style={{ width: "1200px", height: "200px" }}
        >
          <div className="w-1/2 text-center">
            <a className="link">Adidas</a>
          </div>
          <div className="w-1/2 flex justify-end">
            <img
              src="https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg"
              alt="Image"
              className="h-full object-cover rounded-lg"
              style={{ maxWidth: "50%", maxHeight: "100%" }}
            />
          </div>
        </div>

        <div
          className="flex items-center bg-gray-200 rounded-lg p-4 mb-4 mr-4"
          style={{ width: "1200px", height: "200px" }}
        >
          <div className="w-1/2 text-center">
            <a className="link">Vans</a>
          </div>
          <div className="w-1/2 flex justify-end">
            <img
              src="https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg"
              alt="Image"
              className="h-full object-cover rounded-lg"
              style={{ maxWidth: "50%", maxHeight: "100%" }}
            />
          </div>
        </div>

        <div
          className="flex items-center bg-gray-200 rounded-lg p-4 mb-4 mr-4"
          style={{ width: "1200px", height: "200px" }}
        >
          <div className="w-1/2 text-center">
            <a className="link">Puma</a>
          </div>
          <div className="w-1/2 flex justify-end">
            <img
              src="https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg"
              alt="Image"
              className="h-full object-cover rounded-lg"
              style={{ maxWidth: "50%", maxHeight: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
