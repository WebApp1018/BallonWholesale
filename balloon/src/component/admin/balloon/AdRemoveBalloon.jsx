import React from "react";
import { getProdcutAsync } from "../../../app/productSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const AdRemoveBalloon = ({ selectedProducts, show, closeModal, success }) => {
  const dispatch = useDispatch();

  // get array of keys from selectedProducts
  let selectedProductKeys = "";

  if (selectedProducts) {
    selectedProductKeys = selectedProducts.map((product) => product._id);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const removeProducts = {
      productId: selectedProductKeys,
    };

    axios
      .post(
        process.env.REACT_APP_API_BASE_URL + "api/product/remove",
        removeProducts
      )
      .then((res) => {
        dispatch(getProdcutAsync());
        closeModal();
        success(1);
      })
      .catch((err) => {
        console.log("err.response.data", err.response.data);
      });
  };

  return (
    <div
      className="hidden fixed top-0 left-0 right-0 z-[51] w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full justify-center items-center"
      style={{ display: show === "remove" ? "flex" : "none" }}
    >
      <div className="relative w-full h-full max-w-md md:h-auto">
        <div className="relative bg-white shadow">
          <button
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 text-sm p-1.5 ml-auto inline-flex items-center"
            onClick={closeModal}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Are you sure to remove?
            </h3>
            <button
              className="w-1/2 text-white hover:text-[#F8981D] bg-[#F8981D] hover:bg-white border hover:border-[#F8981D] font-medium text-sm mt-5 px-5 py-2.5 text-center"
              onClick={onSubmit}
            >
              Remove
            </button>
            <button
              className="w-1/2 text-white hover:text-[#F8981D] bg-[#F8981D] hover:bg-white border hover:border-[#F8981D] font-medium text-sm mt-5 px-5 py-2.5 text-center"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdRemoveBalloon;
