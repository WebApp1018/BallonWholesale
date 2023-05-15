import React from "react";
import Topbar from "../layout/Topbar";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";

const BalloonDetail = () => {
  return (
    <div>
      <Topbar />
      <div className="w-full bg-[#f1f1f1] mt-1 pb-[50px]">
        <div className="w-full bg-[#007dc5] flex items-center py-5 pl-[15px] sm:pl-[100px]">
          <div className="text-white font-bold text-[25px] my-auto">
            <div className="text-start text-[20px] sm:text-[25px] mb-3">
              Birthday Boy Cake & Candles
            </div>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex flex-col sm:flex-row items-start sm:items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link
                    to="#"
                    className="inline-flex items-center text-sm font-medium hover:underline"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6"
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
                    <Link
                      to="#"
                      className="ml-1 text-sm font-medium hover:underline md:ml-2"
                    >
                      Category
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6"
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
                    <span className="ml-1 text-sm font-medium md:ml-2">
                      Birthday Boy Cake & Candles
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row px-[15px] sm:px-[100px] mt-[50px]">
          <div className="w-full sm:w-1/2 mb-10 sm:mb-0">
            <img src="/assets/img/product.png" alt="" />
          </div>
          <div className="w-full sm:w-1/2 text-center sm:text-start">
            <div className="text-[20px] font-bold mb-5">
              Birthday Boy Cake & Candles
            </div>
            <div>
              Size and shape: Air-Fill Special Shapes Size and shape: Air-Fill
              Special Shapes Size and shape: Air-Fill Special Shapes Size and
              shape: Air-Fill Special Shapes Size and shape: Air-Fill Special
              Shapes Size and shape: Air-Fill Special Shapes Size and shape:
              Air-Fill Special Shapes Size and shape: Air-Fill Special Shapes
              Size and shape: Air-Fill Special Shapes Size and shape: Air-Fill
              Special Shapes
            </div>
            <div>
              <div className="font-semibold text-[17px] my-5">
                Related Products
              </div>
              <div className="w-full flex flex-wrap text-center">
                <div className="w-[130px] sm:w-[190px] border shadow-md hover:shadow-xl rounded-lg m-0 mr-2 sm:mr-4 mb-2 sm:mb-4 bg-white">
                  <img
                    src="/assets/img/balloons3.png"
                    className="px-3 py-2"
                    alt=""
                  />
                  <div className="mt-3 mb-5">Balloons1</div>
                </div>
                <div className="w-[130px] sm:w-[190px] border shadow-md hover:shadow-xl rounded-lg m-0 mr-2 sm:mr-4 mb-2 sm:mb-4 bg-white">
                  <img
                    src="/assets/img/balloons4.png"
                    className="px-3 py-2"
                    alt=""
                  />
                  <div className="mt-3 mb-5">Balloons1</div>
                </div>
                <div className="w-[130px] sm:w-[190px] border shadow-md hover:shadow-xl rounded-lg m-0 mr-2 sm:mr-4 mb-2 sm:mb-4 bg-white">
                  <img
                    src="/assets/img/balloons5.png"
                    className="px-3 py-2"
                    alt=""
                  />
                  <div className="mt-3 mb-5">Balloons1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BalloonDetail;