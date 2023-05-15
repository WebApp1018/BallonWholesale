import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    // menu
    //   ? (document.body.style.overflow = "auto")
    //   : (document.body.style.overflow = "hidden");
    menu ? setMenu(false) : setMenu(true);
  };

  return (
    <div className="w-full h-[70px] shadow-lg flex justify-between items-center bg-white  z-[50]">
      <div className="ml-[25px] sm:ml-[50px]">
        <Link to="/">
          <img className="w-[150px]" src="/assets/img/Logo.png" alt="logo" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="hidden lg:flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
          <li>
            <Link
              to="/"
              className="block py-2 pl-3 pr-4 text-[#404040] md:hover:bg-transparent md:border-0 md:hover:text-[#e6c823]"
            >
              Home
            </Link>
          </li>
          <li className="mx-[57px]">
            <Link
              to="/balloons"
              className="block py-2 pl-3 pr-4 text-[#404040] md:hover:bg-transparent md:border-0 md:hover:text-[#e6c823]"
            >
              Balloons
            </Link>
          </li>
          <li className="mx-[57px]">
            <Link
              to="/category"
              className="block py-2 pl-3 pr-4 text-[#404040] md:hover:bg-transparent md:border-0 md:hover:text-[#e6c823]"
            >
              Category
            </Link>
          </li>
          <li className="mx-[57px]">
            <Link
              to="/contact"
              className="block py-2 pl-3 pr-4 text-[#404040] md:hover:bg-transparent md:border-0 md:hover:text-[#e6c823]"
            >
              Contact Us
            </Link>
          </li>
          <li className="mx-[57px]">
            <Link
              to="/about"
              className="block py-2 pl-3 pr-4 text-[#404040] md:hover:bg-transparent md:border-0 md:hover:text-[#e6c823]"
            >
              About Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="mr-[50px] text-[#404040] hidden lg:block">
        <div className="block py-2 pl-3 pr-4 text-[#404040] md:hover:bg-transparent md:border-0 md:hover:text-[#e6c823]">
          How To Buy?
        </div>
      </div>
      <div
        className="flex justify-between items-center text-[#404040] lg:hidden mr-[25px] sm:mr-[50px]"
        onClick={(e) => toggleMenu()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
        <div className="ml-2 font-bold">MENU</div>
      </div>
      {menu ? (
        <div className="fixed top-0 w-full h-screen bg-[#007dc5] shadow-lg z-[50]">
          <div className="flex mt-5 ml-7 mr-7 pb-5 border-b">
            <div className="">
              <Link to="/">
                <img
                  className="w-[350px]"
                  src="/assets/img/Logo.png"
                  alt="logo"
                />
              </Link>
            </div>
            <div
              className="w-full flex justify-end"
              onClick={(e) => setMenu(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <ul className="flex flex-col items-start ml-7 font-medium">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-white md:hover:bg-transparent md:border-0 text-[20px] font-bold md:hover:text-[#e6c823]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/balloons"
                className="block py-2 pl-3 pr-4 text-white md:hover:bg-transparent md:border-0 text-[20px] font-bold md:hover:text-[#e6c823]"
              >
                Balloons
              </Link>
            </li>
            <li>
              <Link
                to="/category"
                className="block py-2 pl-3 pr-4 text-white md:hover:bg-transparent md:border-0 text-[20px] font-bold md:hover:text-[#e6c823]"
              >
                Category
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 pl-3 pr-4 text-white md:hover:bg-transparent md:border-0 text-[20px] font-bold md:hover:text-[#e6c823]"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 pl-3 pr-4 text-white md:hover:bg-transparent md:border-0 text-[20px] font-bold md:hover:text-[#e6c823]"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Topbar;
