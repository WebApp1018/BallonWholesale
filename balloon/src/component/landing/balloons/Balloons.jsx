import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  showProductByCategory,
  getProdcutAsync,
  getProdcutByCategoryAsync,
} from "../../../app/productSlice";
import { showCategory, getCategoryAsync } from "../../../app/categorySlice";
import Topbar from "../layout/Topbar";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";

const Balloons = () => {
  const dispatch = useDispatch();
  const { category_name } = useParams();
  const productByCategory = useSelector(showProductByCategory);
  const categories = useSelector(showCategory);

  const [productToDisplay, setProductToDisplay] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState();
  const [categoryMenu, setCategoryMenu] = useState(true);

  const itemsPerPage = 20;
  const totalPages = Math.ceil(productByCategory?.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  useEffect(() => {
    dispatch(getProdcutAsync());
    dispatch(getCategoryAsync());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (category_name) {
      dispatch(getProdcutByCategoryAsync(category_name));
      setSelectedCategory(category_name);
    } else {
      dispatch(getProdcutByCategoryAsync("all"));
      setSelectedCategory("all");
    }
    window.scrollTo(0, 0);
  }, [category_name]);

  useEffect(() => {
    if (productByCategory) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setProductToDisplay(productByCategory.slice(startIndex, endIndex));
    }
    window.scrollTo(0, 0);
  }, [productByCategory, currentPage, itemsPerPage]);

  const displayProduct = (category = selectedCategory, page = 1) => {
    if (!totalPages || (page && page <= totalPages)) {
      setSelectedCategory(category);
      setCurrentPage(page);
      dispatch(getProdcutByCategoryAsync(category));
      setCategoryMenu(true);
    }
  };

  const toggleCategory = () => {
    categoryMenu ? setCategoryMenu(false) : setCategoryMenu(true);
  };

  return (
    <div>
      <Topbar />
      <div className="w-full bg-[#f1f1f1] mt-1 pb-[50px]">
        <div className="w-full h-[100px] bg-[#007dc5] flex items-center pl-[100px]">
          <div className="text-white font-bold text-[25px] my-auto">
            Balloons
          </div>
        </div>
        <div
          className="flex sm:hidden w-full bg-[#002f75] text-white font-bold px-[15px] py-2"
          onClick={(e) => toggleCategory()}
        >
          {categoryMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          )}
          {categoryMenu ? "Show Balloons Category" : "Hide Balloons Category"}
        </div>
        {!categoryMenu ? (
          <div className="w-full bg-white shadow-lg">
            <Link onClick={(e) => displayProduct("all", 1)}>
              <div className="border border-l-2 border-l-[#007dc5] py-3 px-3 text-[#0a405f] font-bold hover:bg-[#36b5e7]">
                All Balloons
              </div>
            </Link>
            {categories &&
              categories.map((category, ind) => (
                <Link
                  key={ind}
                  onClick={(e) => displayProduct(category.name, 1)}
                >
                  <div className="border py-3 px-3 text-[#007dc5] font-bold hover:bg-[#f1f1f1]">
                    {category.name}
                  </div>
                </Link>
              ))}
          </div>
        ) : null}
        <div className="flex justify-between mx-[15px] sm:mx-[100px] mt-[50px]">
          <div className="hidden sm:block w-1/4 h-fit bg-white mr-[50px] text-start shadow-lg">
            <Link onClick={(e) => displayProduct("all", 1)}>
              <div
                className={`py-3 px-3 text-[#007dc5] font-bold ${
                  selectedCategory === "all"
                    ? "bg-[#36b5e7] border-l-[#007dc5] border-l-2 border text-white"
                    : "bg-[#f1f1f1]"
                }`}
              >
                All Balloons
              </div>
            </Link>
            {categories &&
              categories.map((category, ind) => (
                <Link
                  key={ind}
                  onClick={(e) => displayProduct(category.name, 1)}
                >
                  <div
                    className={`border py-3 px-3 font-bold text-[#007dc5] ${
                      selectedCategory === category.name
                        ? "bg-[#36b5e7] border-l-[#007dc5] border-l-2 border text-white"
                        : "bg-[#f1f1f1]"
                    }`}
                  >
                    {category.name}
                  </div>
                </Link>
              ))}
          </div>
          <div className="w-full sm:w-3/4">
            <div className="flex flex-wrap justify-start mr-[-1rem] mb-[50px]">
              {productToDisplay &&
                productToDisplay.map((product, ind) => (
                  <div
                    key={ind}
                    className="border rounded-lg shadow-lg flex-0 flex-shrink-1 mr-4 mb-4 basis-[43.5%] lg:basis-[18%] bg-white"
                  >
                    <Link
                      to={`/balloon/detail/${product?.code}`}
                      className="w-full h-full flex flex-col justify-between rounded-lg"
                    >
                      <img
                        src={`${process.env.REACT_APP_API_BASE_URL}public/upload/${product?.image[0]}`}
                        className="object-contain w-full h-auto rounded-lg"
                        alt=""
                      />
                      <div className="mt-3 mb-5">{product?.name}</div>
                    </Link>
                  </div>
                ))}
            </div>

            <nav aria-label="Page navigation example">
              <ul className="inline-flex items-center -space-x-px">
                {/* render the "Previous" button */}
                <li>
                  <Link
                    onClick={() =>
                      displayProduct(selectedCategory, currentPage - 1)
                    }
                    className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </li>
                {/* render the page number links */}
                {pageNumbers.map((pageNumber) => (
                  <li key={pageNumber}>
                    <Link
                      onClick={() =>
                        displayProduct(selectedCategory, pageNumber)
                      }
                      className={classNames(
                        "px-3",
                        "py-2",
                        "leading-tight",
                        "border",
                        "hover:bg-gray-100",
                        "hover:text-gray-700",
                        "text-gray-500",
                        "border-gray-300",
                        {
                          "bg-[#002f75]": currentPage === pageNumber,
                          "text-white": currentPage === pageNumber,
                        }
                      )}
                    >
                      {pageNumber}
                    </Link>
                  </li>
                ))}
                {/* render the "Next" button */}
                <li>
                  <Link
                    onClick={() =>
                      displayProduct(selectedCategory, currentPage + 1)
                    }
                    className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 "
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Balloons;
