import React from "react";
import { Link } from "react-router-dom";
import Topbar from "../layout/Topbar";
import Footer from "../layout/Footer";

const HowToBuy = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Topbar />
      <div className="mb-[50px]">
        <div className="w-full h-[100px] bg-[#007dc5] flex items-center pl-[100px]">
          <div className="text-white font-bold text-[25px] my-auto">
            How To Buy?
          </div>
        </div>
        <div className="hidden sm:block mt-10 mx-6 lg:mx-[100px]">
          <img src="assets/img/Banner-2.jpg" className="rounded-lg" alt="" />
        </div>
        <div className="w-full mt-[50px] px-[15px] sm:px-[100px] text-justify">
          <div className="text-[18px] font-semibold text-center">
            Thank you for choosing Balloreem for your wholesale balloon needs.
            To make a purchase, simply follow the steps below:
          </div>
          <div className="mt-10">
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
          <div className="mt-5">
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
          <div className="mt-5">
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
          <div className="mt-5">
            <div className="text-[18px] font-semibold">
              Step 4: Receive a Quotation
            </div>
            <div>
              Upon receiving your inquiry, we will promptly respond with a
              quotation based on your requirements. The quotation will include
              the total cost, any applicable discounts, and payment details.
            </div>
          </div>
          <div className="mt-5">
            <div className="text-[18px] font-semibold">
              Step 5: Confirm Your Order
            </div>
            <div>
              If you are satisfied with the quotation, confirm your order by
              notifying us via email or phone. We will guide you through the
              payment process and provide you with further instructions.
            </div>
          </div>
          <div className="mt-5">
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
          <div className="mt-10">
            If you have any additional questions or require further assistance,
            please do not hesitate to contact us. We value your business and
            look forward to serving you with our high-quality wholesale
            balloons.
          </div>
          <div className="mt-10">
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
