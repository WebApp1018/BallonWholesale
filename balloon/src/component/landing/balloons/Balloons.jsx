import React, { useState } from "react";
import Topbar from "../layout/Topbar";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";

const Balloons = () => {
  const [categoryMenu, setCategoryMenu] = useState(true);

  const toggleCategory = () => {
    categoryMenu ? setCategoryMenu(false) : setCategoryMenu(true);
  };

  return (
    <div>
      <Topbar />
      <div className="w-full bg-[#f1f1f1] mt-1 pb-[50px]">
        <div className="w-full h-[100px] bg-[#007dc5] flex items-center pl-[100px]">
          <div className="text-white font-bold text-[25px] my-auto">
            Balloons
          </div>
        </div>
        <div
          className="flex sm:hidden w-full bg-[#002f75] text-white font-bold px-[15px] py-2"
          onClick={(e) => toggleCategory()}
        >
          {categoryMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          )}

          {categoryMenu ? "Show Balloons Category" : "Hide Balloons Category"}
        </div>
        {!categoryMenu ? (
          <div className="w-full bg-white shadow-lg">
            <Link>
              <div className="border border-l-2 border-l-[#007dc5] py-3 px-3 text-[#0a405f] font-bold hover:bg-[#36b5e7]">
                All Balloons
              </div>
            </Link>
            <Link>
              <div className="border py-3 px-3 text-[#007dc5] font-bold hover:bg-[#f1f1f1]">
                Category1
              </div>
            </Link>
            <Link>
              <div className="border py-3 px-3 text-[#007dc5] font-bold hover:bg-[#f1f1f1]">
                Category1
              </div>
            </Link>
            <Link>
              <div className="border py-3 px-3 text-[#007dc5] font-bold hover:bg-[#f1f1f1]">
                Category1
              </div>
            </Link>
            <Link>
              <div className="border py-3 px-3 text-[#007dc5] font-bold hover:bg-[#f1f1f1]">
                Category1
              </div>
            </Link>
            <Link>
              <div className="border py-3 px-3 text-[#007dc5] font-bold hover:bg-[#f1f1f1]">
                Category1
              </div>
            </Link>
          </div>
        ) : null}
        <div className="flex justify-between mx-[15px] sm:mx-[100px] mt-[50px]">
          <div className="hidden sm:block w-1/4 h-fit bg-white mr-[50px] text-start shadow-lg">
            <Link>
              <div className="border border-l-2 border-l-[#007dc5] py-3 px-3 text-[#0a405f] font-bold hover:bg-[#36b5e7]">
                All Balloons
              </div>
            </Link>
            <Link>
              <div className="border py-3 px-3 text-[#007dc5] font-bold hover:bg-[#f1f1f1]">
                Category1
              </div>
            </Link>
            <Link>
              <div className="border py-3 px-3 text-[#007dc5] font-bold hover:bg-[#f1f1f1]">
                Category1
              </div>
            </Link>
            <Link>
              <div className="border py-3 px-3 text-[#007dc5] font-bold hover:bg-[#f1f1f1]">
                Category1
              </div>
            </Link>
            <Link>
              <div className="border py-3 px-3 text-[#007dc5] font-bold hover:bg-[#f1f1f1]">
                Category1
              </div>
            </Link>
            <Link>
              <div className="border py-3 px-3 text-[#007dc5] font-bold hover:bg-[#f1f1f1]">
                Category1
              </div>
            </Link>
          </div>
          <div className="w-full sm:w-3/4">
            <div className="w-full flex flex-wrap mb-[50px]">
              <Link to="/balloon/detail">
                <div className="w-[130px] sm:w-[190px] border shadow-md hover:shadow-xl rounded-lg m-0 mr-2 sm:mr-4 mb-2 sm:mb-4 bg-white">
                  <img
                    src="assets/img/balloons3.png"
                    className="px-3 py-2"
                    alt=""
                  />
                  <div className="mt-3 mb-5">Balloons1</div>
                </div>
              </Link>
              <div className="w-[130px] sm:w-[190px] border shadow-md hover:shadow-xl rounded-lg m-0 mr-2 sm:mr-4 mb-2 sm:mb-4 bg-white">
                <img
                  src="assets/img/balloons4.png"
                  className="px-3 py-2"
                  alt=""
                />
                <div className="mt-3 mb-5">Balloons1</div>
              </div>
              <div className="w-[130px] sm:w-[190px] border shadow-md hover:shadow-xl rounded-lg m-0 mr-2 sm:mr-4 mb-2 sm:mb-4 bg-white">
                <img
                  src="assets/img/balloons5.png"
                  className="px-3 py-2"
                  alt=""
                />
                <div className="mt-3 mb-5">Balloons1</div>
              </div>
              <div className="w-[130px] sm:w-[190px] border shadow-md hover:shadow-xl rounded-lg m-0 mr-2 sm:mr-4 mb-2 sm:mb-4 bg-white">
                <img
                  src="assets/img/balloons1.png"
                  className="px-3 py-2"
                  alt=""
                />
                <div className="mt-3 mb-5">Balloons1</div>
              </div>
              <div className="w-[130px] sm:w-[190px] border shadow-md hover:shadow-xl rounded-lg m-0 mr-2 sm:mr-4 mb-2 sm:mb-4 bg-white">
                <img
                  src="assets/img/balloons2.png"
                  className="px-3 py-2"
                  alt=""
                />
                <div className="mt-3 mb-5">Balloons1</div>
              </div>
              <div className="w-[130px] sm:w-[190px] border shadow-md hover:shadow-xl rounded-lg m-0 mr-2 sm:mr-4 mb-2 sm:mb-4 bg-white">
                <img
                  src="assets/img/balloons3.png"
                  className="px-3 py-2"
                  alt=""
                />
                <div className="mt-3 mb-5">Balloons1</div>
              </div>
              <div className="w-[130px] sm:w-[190px] border shadow-md hover:shadow-xl rounded-lg m-0 mr-2 sm:mr-4 mb-2 sm:mb-4 bg-white">
                <img
                  src="assets/img/balloons4.png"
                  className="px-3 py-2"
                  alt=""
                />
                <div className="mt-3 mb-5">Balloons1</div>
              </div>
              <div className="w-[130px] sm:w-[190px] border shadow-md hover:shadow-xl rounded-lg m-0 mr-2 sm:mr-4 mb-2 sm:mb-4 bg-white">
                <img
                  src="assets/img/balloons5.png"
                  className="px-3 py-2"
                  alt=""
                />
                <div className="mt-3 mb-5">Balloons1</div>
              </div>
              <div className="w-[130px] sm:w-[190px] border shadow-md hover:shadow-xl rounded-lg m-0 mr-2 sm:mr-4 mb-2 sm:mb-4 bg-white">
                <img
                  src="assets/img/balloons3.png"
                  className="px-3 py-2"
                  alt=""
                />
                <div className="mt-3 mb-5">Balloons1</div>
              </div>
              <div className="w-[130px] sm:w-[190px] border shadow-md hover:shadow-xl rounded-lg m-0 mr-2 sm:mr-4 mb-2 sm:mb-4 bg-white">
                <img
                  src="assets/img/balloons4.png"
                  className="px-3 py-2"
                  alt=""
                />
                <div className="mt-3 mb-5">Balloons1</div>
              </div>
              <div className="w-[130px] sm:w-[190px] border shadow-md hover:shadow-xl rounded-lg m-0 mr-2 sm:mr-4 mb-2 sm:mb-4 bg-white">
                <img
                  src="assets/img/balloons5.png"
                  className="px-3 py-2"
                  alt=""
                />
                <div className="mt-3 mb-5">Balloons1</div>
              </div>
              <div className="w-[130px] sm:w-[190px] border shadow-md hover:shadow-xl rounded-lg m-0 mr-2 sm:mr-4 mb-2 sm:mb-4 bg-white">
                <img
                  src="assets/img/balloons1.png"
                  className="px-3 py-2"
                  alt=""
                />
                <div className="mt-3 mb-5">Balloons1</div>
              </div>
              <div className="w-[130px] sm:w-[190px] border shadow-md hover:shadow-xl rounded-lg m-0 mr-2 sm:mr-4 mb-2 sm:mb-4 bg-white">
                <img
                  src="assets/img/balloons2.png"
                  className="px-3 py-2"
                  alt=""
                />
                <div className="mt-3 mb-5">Balloons1</div>
              </div>
              <div className="w-[130px] sm:w-[200px] border shadow-md hover:shadow-xl rounded-lg m-0 mr-2 sm:mr-4 mb-2 sm:mb-4 bg-white">
                <img
                  src="assets/img/balloons3.png"
                  className="px-3 py-2"
                  alt=""
                />
                <div className="mt-3 mb-5">Balloons1</div>
              </div>
            </div>

            <nav aria-label="Page navigation example">
              <ul className="inline-flex items-center -space-x-px">
                <li>
                  <Link
                    to="#"
                    className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </li>
                <li className="hidden sm:block">
                  <Link
                    to="#"
                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </Link>
                </li>
                <li className="hidden sm:block">
                  <Link
                    to="#"
                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    aria-current="page"
                    className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </Link>
                </li>
                <li className="hidden sm:block">
                  <Link
                    to="#"
                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    4
                  </Link>
                </li>
                <li className="hidden sm:block">
                  <Link
                    to="#"
                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    5
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Balloons;
