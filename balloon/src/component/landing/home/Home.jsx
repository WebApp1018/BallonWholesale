import React, { useState } from "react";
import Topbar from "../layout/Topbar";
import Footer from "../layout/Footer";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <div>
      <Topbar />
      <div className="mb-[50px]">
        <div className="w-full mt-1">
          <img
            src="assets/img/header.jpg"
            className="min-h-[300px] object-cover object-left"
            alt=""
          />
        </div>
        <div className="mx-0 lg:mx-[100px]">
          <div className="mt-10">
            <img
              src="assets/img/banner.png"
              className="hidden sm:block rounded-lg"
              alt=""
            />
          </div>
          <div className="w-full flex items-center justify-between mt-[50px]">
            <div className="w-1/4 sm:w-1/3 border"></div>
            <div className="text-[20px] sm:text-[30px] lg:text-[36px] text-[#2b2b2b]">
              New Balloons
            </div>
            <div className="w-1/4 sm:w-1/3 border"></div>
          </div>
          <div className="w-full flex flex-wrap justify-center mt-[50px] pl-4">
            <div className="w-[150px] sm:w-[200px] md:w-[250px] border shadow-md rounded-lg m-0 mr-4 mb-4">
              <img
                src="assets/img/balloons3.png"
                className="px-3 py-2"
                alt=""
              />
              <div className="mt-3 mb-5">Balloons1</div>
            </div>
            <div className="w-[150px] sm:w-[200px] md:w-[250px] border shadow-md rounded-lg m-0 mr-4 mb-4">
              <img
                src="assets/img/balloons4.png"
                className="px-3 py-2"
                alt=""
              />
              <div className="mt-3 mb-5">Balloons1</div>
            </div>
            <div className="w-[150px] sm:w-[200px] md:w-[250px] border shadow-md rounded-lg m-0 mr-4 mb-4">
              <img
                src="assets/img/balloons5.png"
                className="px-3 py-2"
                alt=""
              />
              <div className="mt-3 mb-5">Balloons1</div>
            </div>
            <div className="w-[150px] sm:w-[200px] md:w-[250px] border shadow-md rounded-lg m-0 mr-4 mb-4">
              <img
                src="assets/img/balloons1.png"
                className="px-3 py-2"
                alt=""
              />
              <div className="mt-3 mb-5">Balloons1</div>
            </div>
            <div className="w-[150px] sm:w-[200px] md:w-[250px] border shadow-md rounded-lg m-0 mr-4 mb-4">
              <img
                src="assets/img/balloons2.png"
                className="px-3 py-2"
                alt=""
              />
              <div className="mt-3 mb-5">Balloons1</div>
            </div>
            <div className="w-[150px] sm:w-[200px] md:w-[250px] border shadow-md rounded-lg m-0 mr-4 mb-4">
              <img
                src="assets/img/balloons3.png"
                className="px-3 py-2"
                alt=""
              />
              <div className="mt-3 mb-5">Balloons1</div>
            </div>
            <div className="w-[150px] sm:w-[200px] md:w-[250px] border shadow-md rounded-lg m-0 mr-4 mb-4">
              <img
                src="assets/img/balloons4.png"
                className="px-3 py-2"
                alt=""
              />
              <div className="mt-3 mb-5">Balloons1</div>
            </div>
            <div className="w-[150px] sm:w-[200px] md:w-[250px] border shadow-md rounded-lg m-0 mr-4 mb-4">
              <img
                src="assets/img/balloons5.png"
                className="px-3 py-2"
                alt=""
              />
              <div className="mt-3 mb-5">Balloons1</div>
            </div>
          </div>
          <div className="w-full flex items-center justify-between mt-[50px]">
            <div className="w-1/3 border"></div>
            <div className="text-[20px] sm:text-[30px] lg:text-[36px] text-[#2b2b2b]">
              Our Balloons
            </div>
            <div className="w-1/3 border"></div>
          </div>
          <div className="w-full flex flex-wrap justify-center sm:justify-between border-b-2 border-[#e6c823] mt-5 gap-2">
            <div className="w-[82px] h-[70px] relative text-[15px] font-semibold overflow-hidden bg-[#0098ff] hover:cursor-pointer border-t-2 border-[#0098ff] text-white">
              <span className="left-1/2 absolute top-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 px-4">
                Faild
              </span>
            </div>
            <div className="w-[82px] h-[70px] relative text-[15px] font-semibold overflow-hidden bg-[#f1f1f1] hover:cursor-pointer border-t-2 border-[#F384A4]">
              <span className="left-1/2 absolute top-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 px-4">
                Faild
              </span>
            </div>
            <div className="w-[82px] h-[70px] relative text-[15px] font-semibold overflow-hidden bg-[#f1f1f1] hover:cursor-pointer border-t-2 border-[#01C3C3]">
              <span className="left-1/2 absolute top-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 px-4">
                Faild
              </span>
            </div>
            <div className="w-[82px] h-[70px] relative text-[15px] font-semibold overflow-hidden bg-[#f1f1f1] hover:cursor-pointer border-t-2 border-[#00A735]">
              <span className="left-1/2 absolute top-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 px-4">
                Faild
              </span>
            </div>
            <div className="w-[82px] h-[70px] relative text-[15px] font-semibold overflow-hidden bg-[#f1f1f1] hover:cursor-pointer border-t-2 border-[#FC5D00]">
              <span className="left-1/2 absolute top-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 px-4">
                Faild
              </span>
            </div>
            <div className="w-[82px] h-[70px] relative text-[15px] font-semibold overflow-hidden bg-[#f1f1f1] hover:cursor-pointer border-t-2 border-[#BC9751]">
              <span className="left-1/2 absolute top-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 px-4">
                Faild
              </span>
            </div>
            <div className="w-[82px] h-[70px] relative text-[15px] font-semibold overflow-hidden bg-[#f1f1f1] hover:cursor-pointer border-t-2 border-[#666666]">
              <span className="left-1/2 absolute top-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 px-4">
                Faild
              </span>
            </div>
            <div className="w-[82px] h-[70px] relative text-[15px] font-semibold overflow-hidden bg-[#f1f1f1] hover:cursor-pointer border-t-2 border-[#9828B8]">
              <span className="left-1/2 absolute top-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 px-4">
                Faild
              </span>
            </div>
            <div className="w-[82px] h-[70px] relative text-[15px] font-semibold overflow-hidden bg-[#f1f1f1] hover:cursor-pointer border-t-2 border-[#FFC100]">
              <span className="left-1/2 absolute top-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 px-4">
                Faild
              </span>
            </div>
            <div className="w-[82px] h-[70px] relative text-[15px] font-semibold overflow-hidden bg-[#f1f1f1] hover:cursor-pointer border-t-2 border-[#B91700]">
              <span className="left-1/2 absolute top-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 px-4">
                Faild
              </span>
            </div>
            <div className="w-[82px] h-[70px] relative text-[15px] font-semibold overflow-hidden bg-[#f1f1f1] hover:cursor-pointer border-t-2 border-[#0098ff]">
              <span className="left-1/2 absolute top-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 px-4">
                Faild
              </span>
            </div>
            <div className="w-[82px] h-[70px] relative text-[15px] font-semibold overflow-hidden bg-[#f1f1f1] hover:cursor-pointer border-t-2 border-[#F384A4]">
              <span className="left-1/2 absolute top-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 px-4">
                Faild
              </span>
            </div>
            <div className="w-[82px] h-[70px] relative text-[15px] font-semibold overflow-hidden bg-[#f1f1f1] hover:cursor-pointer border-t-2 border-[#01C3C3]">
              <span className="left-1/2 absolute top-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 px-4">
                Faild
              </span>
            </div>
            <div className="w-[82px] h-[70px] relative text-[15px] font-semibold overflow-hidden bg-[#f1f1f1] hover:cursor-pointer border-t-2 border-[#00A735]">
              <span className="left-1/2 absolute top-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 px-4">
                Faild
              </span>
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-center mt-[50px] pl-4">
            <div className="w-[150px] sm:w-[200px] md:w-[250px] border shadow-md rounded-lg m-0 mr-4 mb-4">
              <img
                src="assets/img/balloons1.png"
                className="px-3 py-2"
                alt=""
              />
              <div className="mt-3 mb-5">Balloons1</div>
            </div>
            <div className="w-[150px] sm:w-[200px] md:w-[250px] border shadow-md rounded-lg m-0 mr-4 mb-4">
              <img
                src="assets/img/balloons2.png"
                className="px-3 py-2"
                alt=""
              />
              <div className="mt-3 mb-5">Balloons1</div>
            </div>
            <div className="w-[150px] sm:w-[200px] md:w-[250px] border shadow-md rounded-lg m-0 mr-4 mb-4">
              <img
                src="assets/img/balloons3.png"
                className="px-3 py-2"
                alt=""
              />
              <div className="mt-3 mb-5">Balloons1</div>
            </div>
            <div className="w-[150px] sm:w-[200px] md:w-[250px] border shadow-md rounded-lg m-0 mr-4 mb-4">
              <img
                src="assets/img/balloons4.png"
                className="px-3 py-2"
                alt=""
              />
              <div className="mt-3 mb-5">Balloons1</div>
            </div>
            <div className="w-[150px] sm:w-[200px] md:w-[250px] border shadow-md rounded-lg m-0 mr-4 mb-4">
              <img
                src="assets/img/balloons5.png"
                className="px-3 py-2"
                alt=""
              />
              <div className="mt-3 mb-5">Balloons1</div>
            </div>
            <div className="w-[150px] sm:w-[200px] md:w-[250px] border shadow-md rounded-lg m-0 mr-4 mb-4">
              <img
                src="assets/img/balloons1.png"
                className="px-3 py-2"
                alt=""
              />
              <div className="mt-3 mb-5">Balloons1</div>
            </div>
            <div className="w-[150px] sm:w-[200px] md:w-[250px] border shadow-md rounded-lg m-0 mr-4 mb-4">
              <img
                src="assets/img/balloons2.png"
                className="px-3 py-2"
                alt=""
              />
              <div className="mt-3 mb-5">Balloons1</div>
            </div>
            <div className="w-[150px] sm:w-[200px] md:w-[250px] border shadow-md rounded-lg m-0 mr-4 mb-4">
              <img
                src="assets/img/balloons3.png"
                className="px-3 py-2"
                alt=""
              />
              <div className="mt-3 mb-5">Balloons1</div>
            </div>
          </div>
          <div className="w-full mt-[50px]">
            <button className="bg-[#A02BE8] text-white px-10 py-2 rounded-lg">
              All Products
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
