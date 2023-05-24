import React from "react";
import Topbar from "../layout/Topbar";
import Footer from "../layout/Footer";

const About = () => {
  return (
    <div>
      <Topbar />
      <div className="mb-[50px]">
        <div className="w-full h-[100px] bg-[#007dc5] flex items-center pl-[100px]">
          <div className="text-white font-bold text-[25px] my-auto">
            About Us
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row items-center mt-[50px] px-[15px] sm:px-[100px]">
          <div className="w-full sm:w-1/2 mr-0 sm:mr-5">
            <img
              src="/assets/img/"
              className="w-full h-[300px] border"
              alt=""
            />
          </div>
          <div className="w-full sm:w-1/2 text-start mt-5 sm:mt-0">
            Established in the UAE, Notstitched is an emerging clothing brand in
            today’s fashion industry with comfort and inclusiveness at its core.
            The brand provides authentic designs tailored perfectly for all
            bodies. With premium quality fabrics, meticulous tailoring detail
            and keen design insight, our brand aims to offer timeless pieces
            that can be easily styled yet look sophisticated. Our objective is
            to facilitate absolute comfort and offer infinite freedom; instill
            humanity and inclusivity, and uphold equality and love. We want our
            audience to feel strong, confident and limitless. We promote
            sustainability and are closely working to provide future collections
            with similar quality yet 100% eco-friendly.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
