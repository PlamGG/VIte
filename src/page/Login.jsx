import React from "react";

export default function Widget() {
  return (
    <div className="flex justify-center pt-0">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 p-4 md:p-8">
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md max-w-xs">
          <h2 className="text-2xl font-bold mb-6">เข้าสู่ระบบ</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="username"
              >
                ชื่อผู้ใช้หรือที่อยู่อีเมล{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="username"
                className="w-full border border-gray-300 p-2 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="password"
              >
                รหัสผ่าน <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 p-2 rounded-lg"
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm">
                จำฉันไว้
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg"
            >
              เข้าสู่ระบบ
            </button>
            <div className="mt-4 text-sm">
              <a href="#" className="text-blue-500">
                ลืมรหัสผ่านของคุณ?
              </a>
            </div>
          </form>
          <div className="mt-6">
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center mb-2">
              {" "}
              Continue with Facebook
            </button>
            <button className="w-full bg-green-500 text-white py-2 rounded-lg flex items-center justify-center mb-2">
              {" "}
              Continue with Line
            </button>
            <button className="w-full bg-gray-100 text-black py-2 rounded-lg flex items-center justify-center">
              {" "}
              Continue with Google
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-white p-4 rounded-lg shadow-md max-w-xs">
          <h2 className="text-2xl font-bold mb-6">ลงทะเบียน</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                อีเมล <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 p-2 rounded-lg"
                required
              />
            </div>
            <p className="text-sm mb-4">
              A link to set a new password will be sent to your email address.
            </p>
            <p className="text-sm mb-4">
              Your personal information will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <a href="#" className="text-blue-500">
                นโยบายความเป็นส่วนตัว
              </a>
              .
            </p>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg"
            >
              ลงทะเบียน
            </button>
          </form>
          <div className="mt-6">
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center mb-2">
              {" "}
              Sign up with Facebook
            </button>
            <button className="w-full bg-green-500 text-white py-2 rounded-lg flex items-center justify-center mb-2">
              {" "}
              Sign up with Line
            </button>
            <button className="w-full bg-gray-100 text-black py-2 rounded-lg flex items-center justify-center">
              {" "}
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
