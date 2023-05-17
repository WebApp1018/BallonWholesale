import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getCategoryAsync } from "../../../app/categorySlice";
import notify from "../../../utils/notify";

const AdRemoveCategory = ({
  show,
  selectedCategory,
  clearSelectedCategory,
  closeModal,
}) => {
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const del_category = {
      categoryId: selectedCategory,
    };

    axios
      .post(
        process.env.REACT_APP_API_BASE_URL + "api/product/remove_category",
        del_category
      )
      .then((res) => {
        closeModal();
        dispatch(getCategoryAsync());
        clearSelectedCategory();
        notify("You have successfully removed a category!", 1);
      })
      .catch((err) => notify("Something went wrong!", 0));
  };

  const clickCloseModal = () => {
    closeModal();
  };

  return (
    <div
      className="hidden fixed top-0 left-0 right-0 z-[51] w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full justify-center items-center"
      style={{ display: show === "remove" ? "flex" : "none" }}
    >
      <div className="relative w-full h-full max-w-md md:h-auto">
        <div className="relative bg-white shadow">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 text-sm p-1.5 ml-auto inline-flex items-center"
            onClick={clickCloseModal}
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
              Are you sure remove this category?
            </h3>
            <div className="w-full text-center">
              <button
                className="text-white hover:text-[#F8981D] bg-[#F8981D] hover:bg-white border hover:border-[#F8981D] font-medium text-sm px-5 py-2.5 text-center"
                onClick={onSubmit}
              >
                Yes
              </button>
              <button
                className="text-white hover:text-[#F8981D] bg-[#F8981D] hover:bg-white border hover:border-[#F8981D] font-medium text-sm px-5 py-2.5 text-center ml-3"
                onClick={closeModal}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdRemoveCategory;
