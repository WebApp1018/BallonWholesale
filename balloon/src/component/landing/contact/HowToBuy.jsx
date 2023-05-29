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
          <div className="text-[18px]">
            Thank you for choosing Balloreem for your wholesale balloon needs.
            To make a purchase, simply follow the steps below:
          </div>
          {/* <div className="w-full sm:w-[600px] mx-auto border shadow-lg rounded-lg mt-[50px] px-[25px] py-[30px]">
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
          </div> */}
          <div className="text-start mt-10">
            <div className="text-[18px] font-semibold">
              Step 1: Browse Our Catalog
            </div>
            <div>
              <Link to="/" className="underline">
                Visit our website
              </Link>{" "}
              to explore our wide range of high-quality wholesale balloons. Take
              your time to review the various sizes and variations available,
              ensuring you find the perfect balloons for your event or business.
            </div>
          </div>
          <div className="text-start mt-5">
            <div className="text-[18px] font-semibold">Step 2: Contact Us</div>
            <div>
              To place an order, please get in touch with us via email or phone.
              You can reach us at{" "}
              <Link to="mailto:Balloreem@hotmail.com" className="underline">
                Balloreem@hotmail.com
              </Link>{" "}
              or call/WhatsApp us directly at{" "}
              <Link to="tel:+971 50 733 2508" className="underline">
                +971 50 733 2508
              </Link>
              . Our friendly and knowledgeable team is ready to assist you with
              any questions you may have and guide you through the purchasing
              process.
            </div>
          </div>
          <div className="text-start mt-5">
            <div className="text-[18px] font-semibold">
              Step 3: Provide Your Requirements
            </div>
            <div>
              When contacting us, kindly provide the following details: Product
              No.: Specify the name and details of the wholesale balloons you
              are interested in purchasing, including the sizes and variations.
              Quantity: Let us know the quantity of balloons you require for
              your event or business. Contact Information: Please provide your
              name, contact number, and email address so that we can easily
              reach you.
            </div>
          </div>
          <div className="text-start mt-5">
            <div className="text-[18px] font-semibold">
              Step 4: Receive a Quotation
            </div>
            <div>
              Upon receiving your inquiry, we will promptly respond with a
              quotation based on your requirements. The quotation will include
              the total cost, any applicable discounts, and payment details.
            </div>
          </div>
          <div className="text-start mt-5">
            <div className="text-[18px] font-semibold">
              Step 5: Confirm Your Order
            </div>
            <div>
              If you are satisfied with the quotation, confirm your order by
              notifying us via email or phone. We will guide you through the
              payment process and provide you with further instructions.
            </div>
          </div>
          <div className="text-start mt-5">
            <div className="text-[18px] font-semibold">
              Step 6: Delivery or In-Person Pickup
            </div>
            <div>
              For your convenience, we offer delivery services within the UAE.
              We will coordinate with you to ensure that your wholesale balloons
              are delivered safely to your desired location. Alternatively, if
              you prefer to visit our shop in Abu Dhabi, you are welcome to do
              so. Our team will be delighted to assist you in person.
            </div>
          </div>
          <div className="text-start mt-10">
            If you have any additional questions or require further assistance,
            please do not hesitate to contact us. We value your business and
            look forward to serving you with our high-quality wholesale
            balloons.
          </div>
          <div className="text-start mt-10">
            Thank you for choosing Balloreem. We are excited to be part of your
            upcoming events and celebrations.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowToBuy;
