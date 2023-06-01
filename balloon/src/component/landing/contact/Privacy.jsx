import React from "react";
import { Link } from "react-router-dom";
import Topbar from "../layout/Topbar";
import Footer from "../layout/Footer";

const Privacy = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Topbar />
      <div>
        <div className="mb-[50px]">
          <div className="w-full h-[100px] bg-[#007dc5] flex items-center pl-[100px]">
            <div className="text-white font-bold text-[25px] my-auto">
              Privacy & Policy
            </div>
          </div>
          <div className="hidden sm:block mt-10 mx-6 lg:mx-[100px]">
            <img src="assets/img/Banner-2.jpg" className="rounded-lg" alt="" />
          </div>
          <div className="w-full mt-[50px] px-[15px] sm:px-[100px] text-justify">
            <div className="text-[20px] font-semibold text-center">
              At Balloreem, we value your privacy and are committed to
              protecting the personal information you share with us. This
              Privacy Policy outlines how we collect, use, and safeguard your
              information in accordance with the applicable laws and regulations
              in the United Arab Emirates (UAE).
            </div>
            <div className="mt-10">
              <div className="text-[18px] font-semibold mb-3">
                1. Information We Collect
              </div>
              <div className="ml-5 mb-3">
                <span className="font-semibold">
                  1.1 Personal Information:{" "}
                </span>{" "}
                When you contact us or place an order, we may collect personal
                information such as your name, email address, phone number, and
                any other details you provide voluntarily.
              </div>
              <div className="ml-5 mb-3">
                <span className="font-semibold">1.2 Usage Data: </span> We may
                also collect information on how you access and use our website.
                This includes your IP address, browser type, device information,
                and browsing activities.
              </div>
            </div>
            <div className="mt-10">
              <div className="text-[18px] font-semibold mb-3">
                2. Use of Information
              </div>
              <div className="ml-5 mb-3">
                <span className="font-semibold">2.1 Personalization: </span> We
                use the information you provide to personalize your experience
                and improve our customer service. This may include responding to
                your inquiries, fulfilling your orders, and providing you with
                relevant information about our products and services.
              </div>
              <div className="ml-5 mb-3">
                <span className="font-semibold">2.2 Communication:</span> We may
                contact you via email or phone to provide updates, respond to
                your requests, or inform you about promotional offers, new
                products, or upcoming events. You have the option to opt out of
                receiving such communications at any time.
              </div>
              <div className="ml-5">
                <span className="font-semibold">2.3 Legal Compliance: </span> We
                may use your information to comply with legal obligations, such
                as tax regulations, fraud prevention, or responding to lawful
                requests from government authorities.
              </div>
            </div>
            <div className="mt-10">
              <div className="text-[18px] font-semibold mb-3">
                3. Data Protection
              </div>
              <div className="ml-5 mb-3">
                <span className="font-semibold">3.1 Data Security: </span> We
                implement appropriate security measures to protect your personal
                information from unauthorized access, alteration, disclosure, or
                destruction. However, please be aware that no method of
                transmission over the internet or electronic storage is 100%
                secure.
              </div>
              <div className="ml-5">
                <span className="font-semibold">3.2 Data Retention: </span> We
                retain your personal information only for as long as necessary
                to fulfill the purposes outlined in this Privacy Policy and to
                comply with legal obligations. Once your data is no longer
                required, it will be securely deleted or anonymized.
              </div>
            </div>
            <div className="mt-10">
              <div className="text-[18px] font-semibold mb-3">
                4. Disclosure of Information
              </div>
              <div className="ml-5 mb-3">
                <span className="font-semibold">
                  4.1 Third-Party Service Providers:{" "}
                </span>{" "}
                We We may engage trusted third-party service providers to assist
                us in operating our business and providing our services. These
                providers are bound by confidentiality agreements and are
                authorized to process your information solely for the purposes
                specified by us.
              </div>
              <div className="ml-5">
                <span className="font-semibold">4.2 Legal Requirements: </span>{" "}
                We may disclose your information if required by law, court
                order, or government regulation, or if we believe such
                disclosure is necessary to protect our rights, enforce our
                policies, or address fraud or security issues.
              </div>
            </div>
            <div className="mt-10">
              <div className="text-[18px] font-semibold mb-3">
                5. Your Rights
              </div>
              <div className="ml-5 mb-3">
                <span className="font-semibold">
                  5.1 Access and Correction:
                </span>{" "}
                You have the right to access and update your personal
                information held by us. If you believe that any information we
                have is inaccurate or incomplete, please contact us to make the
                necessary changes.
              </div>
              <div className="ml-5 mb-3">
                <span className="font-semibold">5.2 Data Portability:</span> You
                have the right to request a copy of your personal information in
                a structured, commonly used, and machine-readable format.
              </div>
              <div className="ml-5">
                <span className="font-semibold">5.3 Opting Out: </span> You can
                opt out of receiving promotional communications from us by
                following the unsubscribe instructions provided in our emails or
                by contacting us directly.
              </div>
            </div>
            <div className="mt-10">
              <div className="text-[18px] font-semibold mb-3">
                6. Changes to this Privacy Policy
              </div>
              <div className="ml-5 mb-3">
                We reserve the right to update or modify this Privacy Policy at
                any time without prior notice. Any changes will be effective
                immediately upon posting the revised version on our website. We
                encourage you to review this Privacy Policy periodically for any
                updates.
              </div>
            </div>
            <div className="mt-10">
              <div className="text-[18px] font-semibold mb-3">
                7. Contact Us
              </div>
              <div className="ml-5 mb-3">
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please contact us at:
              </div>
              <div className="ml-5">
                <span className="font-semibold">Email: </span>
                <Link to="mailto:Balloreem@hotmail.com" className="underline">
                  Balloreem@hotmail.com
                </Link>
              </div>
              <div className="ml-5">
                <span className="font-semibold">Phone: </span>
                <Link to="tel:+971 50 733 2508" className="underline">
                  +971 50 733 2508
                </Link>
              </div>
            </div>
            <div className="mt-10">
              By using our website or providing your personal information to us,
              you signify your consent to the terms of this Privacy Policy.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
