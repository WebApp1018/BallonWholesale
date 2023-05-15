import React, { useState, useEffect } from "react";
import { getCategoryAsync } from "../../../app/categorySlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import notify from "../../../utils/notify";

const AdAddCategory = ({ show, closeModal }) => {
  const dispatch = useDispatch();

  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const new_category = {
      category,
    };

    axios
      .post(
        process.env.REACT_APP_API_BASE_URL + "api/product/add_category",
        new_category
      )
      .then((res) => {
        closeModal();
        setCategory("");
        setErrors({});
        notify("You have successfully added new category!", 1);
        dispatch(getCategoryAsync());
      })
      .catch((err) => setErrors(err.response.data));
  };

  const clickCloseModal = () => {
    closeModal();
    setCategory("");
    setErrors({});
  };

  return (
    <div
      className="hidden fixed top-0 left-0 right-0 z-[51] w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full justify-center items-center"
      style={{ display: show === "add" ? "flex" : "none" }}
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
              Add new category
            </h3>
            <form className="space-y-6" noValidate onSubmit={onSubmit}>
              <div>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                  name="category"
                  type="text"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                />
                {errors.category && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                    <span className="font-medium">Oh, snapp!</span>{" "}
                    {errors.category}
                  </p>
                )}
              </div>
              <div className="w-full text-center">
                <button
                  type="submit"
                  className="text-white hover:text-[#F8981D] bg-[#F8981D] hover:bg-white border hover:border-[#F8981D] font-medium text-sm px-5 py-2.5 text-center"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdAddCategory;
