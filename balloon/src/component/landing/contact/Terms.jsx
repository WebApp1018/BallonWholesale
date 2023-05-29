import React from "react";
import { Link } from "react-router-dom";
import Topbar from "../layout/Topbar";
import Footer from "../layout/Footer";

const Terms = () => {
  return (
    <div>
      <Topbar />
      <div>
        <div className="mb-[50px]">
          <div className="w-full h-[100px] bg-[#007dc5] flex items-center pl-[100px]">
            <div className="text-white font-bold text-[25px] my-auto">
              Terms & Conditions
            </div>
          </div>
          <div className="w-full mt-[50px] px-[15px] sm:px-[100px] text-start">
            <div>
              Please read these Terms and Conditions ("Terms") carefully before
              using the website of Balloreem located at{" "}
              <Link to="https://www.baloreem.ae" className="underline">
                https://www.baloreem.ae
              </Link>{" "}
              . These Terms outline the rules and regulations governing your use
              of our website and the services we offer. By accessing or using
              our website, you agree to comply with these Terms. If you do not
              agree with any part of these Terms, please refrain from using our
              website.
            </div>
            <div className="text-start mt-10">
              <div className="text-[18px] font-semibold mb-3">
                1. Intellectual Property
              </div>
              <div className="ml-5 mb-3">
                <span className="font-semibold">1.1 Ownership:</span> The
                content on our website, including but not limited to text,
                graphics, logos, images, and software, is protected by
                applicable copyright, trademark, and other intellectual property
                laws. The ownership and intellectual property rights of such
                content belong to [Your Wholesale Balloons Business].
              </div>
              <div className="ml-5 mb-3">
                <span className="font-semibold">1.2 Restricted Use:</span> You
                may access and view the content on our website for personal,
                non-commercial use only. You are strictly prohibited from
                modifying, copying, distributing, transmitting, displaying,
                performing, reproducing, publishing, licensing, creating
                derivative works from, or selling any content without our prior
                written consent.
              </div>
            </div>
            <div className="text-start mt-10">
              <div className="text-[18px] font-semibold mb-3">
                2. Website Use
              </div>
              <div className="ml-5 mb-3">
                <span className="font-semibold">2.1 Prohibited Conduct:</span>{" "}
                You agree to use our website only for lawful purposes and in
                accordance with these Terms. You shall not engage in any
                activity that may:
                <div className="ml-5 mt-3 mb-3">
                  - Violate any applicable laws, regulations, or third-party
                  rights.
                </div>
                <div className="ml-5 mb-3">
                  - Impersonate any person or entity or misrepresent your
                  affiliation with any person or entity.
                </div>
                <div className="ml-5 mb-3">
                  - Transmit or disseminate any unauthorized or unsolicited
                  advertising, promotional materials, or spam.
                </div>
                <div className="ml-5 mb-3">
                  - Interfere with the proper functioning of our website or
                  attempt to gain unauthorized access to any portion of the
                  website or its related systems.
                </div>
              </div>
              <div className="ml-5">
                <span className="font-semibold">2.2 User Content:</span> Any
                content, feedback, suggestions, or ideas you provide to us
                through our website or other communication channels becomes our
                property. By submitting such content, you grant us a worldwide,
                royalty-free, perpetual.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
