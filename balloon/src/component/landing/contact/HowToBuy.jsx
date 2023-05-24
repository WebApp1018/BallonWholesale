import React from "react";
import { Link } from "react-router-dom";
import Topbar from "../layout/Topbar";
import Footer from "../layout/Footer";

const HowToBuy = () => {
  return (
    <div>
      <Topbar />
      <div className="mb-[50px]">
        <div className="w-full h-[100px] bg-[#007dc5] flex items-center pl-[100px]">
          <div className="text-white font-bold text-[25px] my-auto">
            How To Buy?
          </div>
        </div>
        <div className="w-full mt-[50px] px-[15px] sm:px-[100px]">
          <div className="text-start">
            Qualatex sells The Very Best Balloons through our expansive network
            of balloon distributors. Click on the distributor link below to find
            the list of distributors who have made a commitment to making it
            easier for retailers and decorators to find Qualatex balloons by
            carrying a wide variety of Qualatex Latex, Microfoil, and Bubble
            Balloons.
          </div>
          <div className="w-full sm:w-[600px] mx-auto border shadow-lg rounded-lg mt-[50px] px-[25px] py-[30px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="red"
              className="w-16 h-16 mx-auto"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
            <div className="font-bold text-[25px] mt-5">Contact Us</div>
            <div className="mb-8 mt-2">
              Need an expert to build a breathtaking birthday bouquet or design
              dazzling decor for a corporate event? You’re one click closer with
              Balloon Pro Finder. Our ever-expanding Qualatex Balloon Network
              (QBN) of balloon professionals include Certified Balloon Artists
              (CBA) as well, so you know you're getting the best.
            </div>
            <Link
              to="/contact"
              className="bg-[#007dc5] px-3 py-2 rounded-md hover:bg-blue-700 font-semibold text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowToBuy;
