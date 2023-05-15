import React, { useState } from "react";
// import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";

const AdNavBar = ({ toggleBar, logout }) => {
  // const decoded = jwt_decode(localStorage.jwtToken);

  const [show_drop_down, setShowDropDown] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 shadow-lg">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={toggleBar}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <Link to="/" className="flex ml-2 md:mr-24">
              <img
                src="/assets/img/ICON.png"
                className="h-8 mr-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                Balloon
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ml-3">
              <div>
                <button
                  type="button"
                  onClick={() => {
                    show_drop_down
                      ? setShowDropDown(false)
                      : setShowDropDown(true);
                  }}
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <span className="sr-only">Open user menu</span>
                  <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
              </div>
              <div
                className="absolute top-[40px] right-2 z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow text-start"
                style={{ display: show_drop_down ? "block" : "none" }}
              >
                {/* <div className="px-4 py-3" role="none">
                  <p
                    className="text-sm text-gray-900 dark:text-white"
                    role="none"
                  >
                    {decoded.fname + " " + decoded.lname}
                  </p>
                  <p
                    className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                    role="none"
                  >
                    {decoded.email}
                  </p>
                </div> */}
                <ul className="py-1" role="none">
                  <li>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#F8981D]"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashbord/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#F8981D]"
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/booking"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#F8981D]"
                    >
                      Balloons
                    </Link>
                  </li>
                  <li>
                    <div
                      onClick={logout}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#F8981D] hover:cursor-pointer"
                    >
                      Logout
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdNavBar;
