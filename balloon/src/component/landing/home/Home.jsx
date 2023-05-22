import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  showProduct,
  showProductByCategory,
  getProdcutAsync,
  getProdcutByCategoryAsync,
} from "../../../app/productSlice";
import { showCategory, getCategoryAsync } from "../../../app/categorySlice";
import Topbar from "../layout/Topbar";
import Footer from "../layout/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const productsData = useSelector(showProduct);

  const [products, setProducts] = useState([]);
  const productByCategory = useSelector(showProductByCategory);
  const categories = useSelector(showCategory);

  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    dispatch(getProdcutAsync());
    dispatch(getCategoryAsync());
    console.log(products);
  }, []);

  useEffect(() => {
    if (categories) {
      dispatch(getProdcutByCategoryAsync(categories[0].name));
    }
  }, [categories]);

  useEffect(() => {
    if (productsData) {
      setProducts(productsData);
    }
  }, [productsData]);

  const displayProduct = (category) => {
    setSelectedCategory(category);
    dispatch(getProdcutByCategoryAsync(category));
  };

  return (
    <div>
      <Topbar />
      <div className="mb-[50px]">
        <div className="w-full mt-1">
          <img
            src="assets/img/header.jpg"
            className="min-h-[300px] object-cover object-left"
            alt=""
          />
        </div>
        <div className="mx-6 lg:mx-[100px]">
          <div className="mt-10">
            <img
              src="assets/img/banner.png"
              className="hidden sm:block rounded-lg"
              alt=""
            />
          </div>
          <div className="w-full flex items-center justify-between mt-[50px]">
            <div className="w-1/4 sm:w-1/3 border"></div>
            <div className="text-[20px] sm:text-[26px] lg:text-[30px] text-[#007dc5]">
              New Balloons
            </div>
            <div className="w-1/4 sm:w-1/3 border"></div>
          </div>
          <div className="flex flex-wrap justify-between mr-[-1rem] mt-5">
            {products &&
              products
                .filter((product) => product.code)
                .sort((a, b) => b.code.localeCompare(a.code))
                .slice(0, 5)
                .map((product, ind) => (
                  <div
                    key={ind}
                    className="border rounded-lg shadow-lg flex-0 flex-shrink-1 mr-4 mb-4 basis-[43.5%] lg:basis-[18.6%]"
                  >
                    <Link to={`/balloon/detail/${product?.code}`}>
                      <img
                        src={`${process.env.REACT_APP_API_BASE_URL}public/upload/${product?.image}`}
                        className="object-contain w-full h-auto"
                        alt=""
                      />
                      <div className="mt-3 mb-5 text-center">
                        {product?.name}
                      </div>
                    </Link>
                  </div>
                ))}
          </div>
          <div className="w-full flex items-center justify-between mt-[50px]">
            <div className="w-1/4 sm:w-1/3 border"></div>
            <div className="text-[20px] sm:text-[26px] lg:text-[30px] text-[#007dc5]">
              Our Balloons
            </div>
            <div className="w-1/4 sm:w-1/3 border"></div>
          </div>
          <div className="w-full flex flex-wrap justify-center sm:justify-between border-b-2 border-[#e6c823] mt-5 gap-2">
            {categories &&
              categories.map((category, ind) => (
                <div
                  key={ind}
                  className="w-[100px] h-[50px] rounded-t-md relative overflow-hidden hover:cursor-pointer"
                >
                  <div
                    className={`absolute inset-0 flex items-center justify-center 
                                ${
                                  selectedCategory === category.name
                                    ? "bg-[#007dc5] text-white"
                                    : "bg-yellow-500 text-black"
                                } hover:bg-blue-700 transition-all duration-300`}
                    onClick={(e) => displayProduct(category.name)}
                  >
                    <span className="font-semibold text-ellipsis overflow-hidden ... px-[5px]">
                      {category.name}
                    </span>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex flex-wrap justify-between mr-[-1rem] mt-5">
            {productByCategory &&
              productByCategory.slice(0, 10).map((product, ind) => (
                <div
                  key={ind}
                  className="border rounded-lg shadow-lg flex-0 flex-shrink-1 mr-4 mb-4 basis-[43.5%] lg:basis-[18.6%]"
                >
                  <Link to={`/balloon/detail/${product?.code}`}>
                    <img
                      src={`${process.env.REACT_APP_API_BASE_URL}public/upload/${product?.image}`}
                      className="object-contain w-full h-auto"
                      alt=""
                    />
                    <div className="mt-3 mb-5 text-center">{product?.name}</div>
                  </Link>
                </div>
              ))}
          </div>
          <div className="w-full mt-[50px]">
            <Link
              to="/balloons/all"
              className="bg-[#007dc5] text-white px-10 py-2 rounded-lg"
            >
              All Products
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
