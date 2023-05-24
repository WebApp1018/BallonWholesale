import React from "react";
import { Link } from "react-router-dom";
import Topbar from "../layout/Topbar";
import Footer from "../layout/Footer";

const Contact = () => {
  return (
    <div>
      <Topbar />
      <div className="mb-[50px]">
        <div className="w-full h-[100px] bg-[#007dc5] flex items-center pl-[100px]">
          <div className="text-white font-bold text-[25px] my-auto">
            Contact Us
          </div>
        </div>
        <div className="w-full mt-[50px] px-[15px] sm:px-[100px]">
          <div className=" font-medium text-[18px]">
            Have any questions? We'd love to hear from you.
          </div>
          <div className="w-full flex flex-col sm:flex-row mt-5">
            <div className="w-full h-[250px] sm:w-1/3 border shadow-lg rounded-lg px-5 py-5 mr-0 sm:mr-5 mb-5 sm:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-16 h-16 mx-auto text-[#B50000]"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="font-semibold text-[25px]">Our Address</div>
              <div className="mb-5">
                Al Muroor Rd Building Nr 6. Next To Al Mandoos - Abu Dhabi
              </div>
              <Link
                target="_blank"
                to="https://goo.gl/maps/SFd7K9UwpLupFqeB7?coh=178572&entry=tt"
                className="bg-[#007dc5] px-3 py-2 rounded-md hover:bg-blue-700 font-semibold text-white"
              >
                Find us on the Map
              </Link>
            </div>
            <div className="w-full h-[250px] sm:w-1/3 border shadow-lg rounded-lg px-5 py-5 mr-0 sm:mr-5 mb-5 sm:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-14 h-14 mx-auto text-[#B50000]"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="font-semibold text-[25px]">Call Us</div>
              <div className="mb-5">
                For any inquiries or assistance, please don't hesitate to call
                us.
              </div>
              <Link
                to="tel:+971 50 733 2508"
                className="bg-[#007dc5] px-3 py-2 rounded-md hover:bg-blue-700 font-semibold text-white"
              >
                +971 50 733 2508
              </Link>
            </div>
            <div className="w-full h-[250px] sm:w-1/3 border shadow-lg rounded-lg px-5 py-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-14 h-14 mx-auto text-[#B50000]"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <div className="font-semibold text-[25px]">Mail Us</div>
              <div className="mb-5">
                Get in touch with our sales team to see how we can provide the
                products
              </div>
              <Link
                to="mailto:Balloreem@hotmail.com"
                className="bg-[#007dc5] px-3 py-2 rounded-md hover:bg-blue-700 font-semibold text-white"
              >
                Balloreem@hotmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
