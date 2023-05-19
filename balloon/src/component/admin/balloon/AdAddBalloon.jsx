import React, { useState, useEffect } from "react";
import { getProdcutAsync } from "../../../app/productSlice";
import axios from "axios";
import { useDispatch } from "react-redux";

const AdAddBalloon = ({ categories, show, closeModal, success }) => {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [product, setProduct] = useState("");
  const [detail, setDetail] = useState("");
  const [image, setImage] = useState();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (categories) {
      setSelectedCategory(categories[0].name);
    }
  }, [categories]);

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("product", product);
    formData.append("category", selectedCategory);
    formData.append("detail", detail);
    formData.append("image", image);

    axios
      .post(
        process.env.REACT_APP_API_BASE_URL + "api/product/add_product",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        success(1);
        closeModal();
        setProduct("");
        setImage(null);
        dispatch(getProdcutAsync());
      })
      .catch((err) => {
        setErrors(err.response.data);
      });
  };

  const clickCloseModal = () => {
    closeModal();
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
              Add new product
            </h3>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 text-start">
                Product Name
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                name="category"
                type="text"
                value={product}
                onChange={(e) => {
                  setProduct(e.target.value);
                }}
              />
              {errors.product && (
                <p className="mt-2 text-xs text-red-600 text-start">
                  <span className="font-medium">Oh, snapp!</span>{" "}
                  {errors.product}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 text-start">
                Product Category
              </label>
              <select
                className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories
                  ? categories.map((item, ind) => (
                      <option value={item.name} key={ind}>
                        {item.name}
                      </option>
                    ))
                  : null}
              </select>
              {errors.category && (
                <p className="mt-2 text-xs text-red-600 text-start">
                  <span className="font-medium">Oh, snapp!</span>{" "}
                  {errors.category}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 text-start">
                Product Details
              </label>
              <textarea
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your thoughts here..."
                value={detail}
                onChange={(e) => {
                  setDetail(e.target.value);
                }}
              ></textarea>
              {errors.detail && (
                <p className="mt-2 text-xs text-red-600 text-start">
                  <span className="font-medium">Oh, snapp!</span>
                  {errors.detail}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 text-start">
                Product Image
              </label>
              <input
                className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className="w-full text-center">
              <button
                className="text-white hover:text-[#F8981D] bg-[#F8981D] hover:bg-white border hover:border-[#F8981D] font-medium text-sm px-5 py-2.5 text-center"
                onClick={onSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdAddBalloon;
