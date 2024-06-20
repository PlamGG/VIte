import React from "react";
import image404 from "../assets/4004.png";

function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-50">
        <img src={image404} alt="404" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 bg-white bg-opacity-75 p-6 rounded shadow-md">
        <h2 className="text-4xl font-bold mb-4">404 - Not Found</h2>
        <p className="text-lg mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a href="/" className="text-blue-500 hover:underline">
          Go back to Homepage
        </a>
      </div>
    </div>
  );
}

export default ErrorPage;
