import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import classNames from "classnames";
import Layout from "../layout/AdLayout";

const categories = [
  { sn: "GR", name: "Category1" },
  { sn: "H", name: "Category1" },
  { sn: "PH", name: "Category1" },
  { sn: "PW", name: "Category1" },
  { sn: "FA", name: "Category1" },
  { sn: "EH", name: "Category1" },
  { sn: "M", name: "Category1" },
  { sn: "LC", name: "Category1" },
];

const AdCategory = () => {
  const [category, setCategory] = useState(categories[0].sn);
  const [detail, setDetail] = useState("");
  const [showModal, setShowModal] = useState("none");
  const [errors, setErrors] = useState({});

  const openModal = (e) => {
    window.scrollTo(0, 0);
    setShowModal(e);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal("none");
    document.body.style.overflow = "auto";
  };

  const displayInfo = (e) => {
    setCategory(e.target.getAttribute("category-key"));
    // dispatch(getBookingSettingAsync(e.target.getAttribute("category-key")));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Layout />
      <div className="mt-[70px] p-4 sm:ml-64 flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/4 text-gray-600 text-base rounded mr-4">
          {categories.map((item, index) => {
            return (
              <div
                key={index}
                className={classNames(
                  "w-full",
                  "mb-2",
                  "border",
                  "border-gray-300",
                  "hover:bg-[#002f75]",
                  "hover:text-white",
                  {
                    "bg-[#002f75]": category === item.sn,
                    "text-white": category === item.sn,
                  }
                )}
              >
                <button
                  className="w-full py-2"
                  category-key={item.sn}
                  onClick={(e) => displayInfo(e)}
                >
                  {item.name}
                </button>
              </div>
            );
          })}
          <div
            className={classNames(
              "w-full",
              "mb-2",
              "border",
              "border-gray-300",
              "hover:bg-[#002f75]",
              "hover:text-white"
            )}
          >
            <button className="w-full py-2" onClick={(e) => openModal("add")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-6 h-6 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full sm:w-3/4 mt-10 sm:mt-0 text-start">
          <div className="mb-6 w-full sm:w-1/2">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Category Name
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              min="0"
              value={category.name}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Description
            </label>
            <textarea
              rows="4"
              className={classNames(
                "block",
                "p-2.5",
                "w-full",
                "text-sm",
                "text-gray-900",
                "bg-gray-50",
                "rounded-lg",
                "border",
                "focus:ring-blue-500",
                "focus:border-blue-500",
                {
                  "border-red-500": errors.detail,
                  "border-gray-300": !errors.detail,
                }
              )}
              placeholder="Leave a comment..."
              onChange={(e) => setDetail(e.target.value)}
              value={detail}
            ></textarea>
            {errors.detail && (
              <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                <span className="font-medium">Oh, snapp!</span> {errors.detail}
              </p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row">
            <button
              className="px-5 py-2 border text-white bg-[#002f75] hover:border-[#002f75] hover:bg-white hover:text-[#002f75]"
              onClick={onSubmit}
            >
              <div className="w-fit flex mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
                Save Setting
              </div>
            </button>
            <button
              className="px-5 py-2 border text-white bg-[#002f75] hover:border-[#002f75] hover:bg-white hover:text-[#002f75]"
              onClick={(e) => openModal("edit")}
            >
              <div className="w-fit flex mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
                Edit Category
              </div>
            </button>
            <button
              className="px-5 py-2 border text-white bg-[#002f75] hover:border-[#002f75] hover:bg-white hover:text-[#002f75]"
              onClick={(e) => openModal("remove")}
            >
              <div className="w-fit flex mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
                Delete Category
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdCategory;
