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
          <div className="w-full text-start mt-5 sm:mt-0">
            <div className="text-center text-[20px]">Welcome to Balloreem!</div>
            <p className="mt-5">
              At Balloreem, we are proud to be a leading player in the wholesale
              balloon industry in the United Arab Emirates. Based in the vibrant
              city of Abu Dhabi, we cater to the needs of businesses and
              individuals across all Emirates, providing them with high-quality,
              temperature-resistant wholesale balloons that are made in Saudi
              Arabia.
            </p>
            <p className="mt-5">
              With a keen focus on delivering excellence, we have built a
              reputation for supplying balloons of exceptional quality that are
              designed to meet the diverse demands of our customers. Our
              balloons are not only visually stunning but also boast impressive
              features such as high insulation, ensuring prolonged air and
              helium retention. This makes them an ideal choice for various
              occasions, whether it's a festive celebration, corporate event, or
              special milestone.
            </p>
            <p className="mt-5">
              At Balloreem, we understand the importance of customization and
              flexibility. Therefore, we offer an extensive range of balloon
              sizes, ensuring that you find the perfect fit for your specific
              needs. From elegant and eye-catching giant balloons to smaller yet
              equally captivating options, our collection provides you with a
              plethora of choices to elevate your event décor.
            </p>
            <p className="mt-5">
              Customer satisfaction is at the heart of our business philosophy.
              We believe in going above and beyond to exceed your expectations,
              which is why we have established low minimum order quantities
              (MOQs). Whether you are a small business looking to add a touch of
              magic to your store or a larger enterprise planning a grand-scale
              event, we welcome you to explore our wholesale balloon offerings.
            </p>
            <p className="mt-5">
              Our user-friendly website has been carefully designed to provide
              you with a seamless browsing experience. Easily navigate through
              our extensive catalog, explore the various sizes available, and
              place your orders effortlessly. With our efficient delivery
              system, your balloons will reach you promptly, ensuring that your
              plans proceed smoothly and without delay.
            </p>
            <p className="mt-5">
              At Balloreem, we take great pride in fostering long-term
              relationships with our customers. We value open communication and
              are always available to address any inquiries or concerns you may
              have. Our dedicated team of experts is ready to assist you in
              making the best choices for your wholesale balloon requirements,
              guiding you through the entire process with professionalism and
              expertise.
            </p>
            <p className="mt-5">
              Join us in adding an extra splash of color and joy to your events
              with our premium wholesale balloons. Experience the difference of
              superior quality, temperature resistance, and remarkable air and
              helium retention. Allow us to be your trusted partner, delivering
              balloons that elevate your celebrations to new heights.
            </p>
            <p className="mt-5">
              Thank you for choosing Balloreem. We look forward to serving you
              and helping you create unforgettable moments throughout the United
              Arab Emirates.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
