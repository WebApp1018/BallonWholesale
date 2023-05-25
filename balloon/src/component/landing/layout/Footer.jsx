import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCategory, getCategoryAsync } from "../../../app/categorySlice";
import { Link } from "react-router-dom";

const Footer = () => {
  const dispatch = useDispatch();
  const categories = useSelector(showCategory);

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    dispatch(getCategoryAsync());
  }, []);

  return (
    <div className="w-full px-[30px] border">
      <div className="w-full flex flex-col lg:flex-row justify-between py-5 px-0 sm:px-[50px]">
        <div className="w-full lg:4/1 text-start px-0 sm:px-[30px]">
          <div className="text-[#B50000] text-[18px] font-semibold">
            Contact
          </div>
          <div className="flex items-start text-left mt-3 sm:mt-[15px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-9 h-9 mr-2 text-[#B50000]"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              Al Muroor Rd Building Nr 6. Next To Al Mandoos - Abu Dhabi
            </div>
          </div>
          <div className="flex items-center text-left mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 mr-2 text-[#B50000]"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <Link to="tel:+971 50 733 2508" className="underline">
                +971 50 733 2508
              </Link>
            </div>
          </div>
          <div className="flex items-center text-left mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 mr-2 text-[#B50000]"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            <div>Balloreem@hotmail.com</div>
          </div>
        </div>
        <div className="w-full lg:4/1 text-start px-0 sm:px-[30px] mt-5 sm:mt-0">
          <div className="text-[#B50000] text-[18px] font-semibold">
            Site Map
          </div>
          <ul className="w-full items-center mt-3 sm:mt-[15px]">
            <li className="mb-2">
              <Link to="/" className=" hover:underline">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/balloons" className=" hover:underline">
                Balloons
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/category" className=" hover:underline">
                Category
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/about" className=" hover:underline">
                About Us
              </Link>
            </li>
            <li className="">
              <Link to="/contact" className=" hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full lg:4/1 text-start mt-5 sm:mt-0 px-0 sm:px-[30px]">
          <div className="text-[#B50000] text-[18px] font-semibold">
            Category
          </div>
          <ul className="w-full items-center mt-3 sm:mt-[15px]">
            {categories &&
              categories.slice(0, 5).map((category, ind) => (
                <li className="mb-2" key={ind}>
                  <Link to={`/balloons/${category?.name}`}>
                    <div className="hover:underline">{category?.name}</div>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="w-full lg:4/1 text-start px-0 sm:px-[30px] mt-5 sm:mt-0">
          <div className="hidden sm:block text-[#B50000] text-[18px] font-semibold">
            Follow
          </div>
          <div className="mt-3 sm:mt-[15px]">
            <div className="flex items-center mb-5">
              <Link to="https://www.facebook.com/Balloreem/" target="_blank">
                <img
                  src="/assets/img/facebook.png"
                  className="w-[30px] mr-2"
                  alt=""
                />
              </Link>
              <Link to="https://www.instagram.com/balloreem/" target="_blank">
                <img
                  src="/assets/img/instagrum.png"
                  className="w-[30px] mr-2"
                  alt=""
                />
              </Link>
            </div>
            <img src="/assets/img/ICON.png" className="w-[100px]" alt="" />
          </div>
        </div>
      </div>
      <div className="w-full text-center text-[#404040] border-t-2 border-[#c9c8c8] py-5">
        Copyright © {currentYear}{" "}
        <Link to="/" className="font-bold">
          Balloreem.
        </Link>{" "}
        All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
