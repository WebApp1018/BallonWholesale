import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import { setCurrentUser } from "../../app/authSlice";
import notify from "../../utils/notify";

const Login = ({ show, redirect, closeModal, navModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors(errors);
  }, [errors]);

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    axios
      .post(process.env.REACT_APP_API_BASE_URL + "api/auth/login", user)
      .then((res) => {
        // Save to localstorage
        const { token } = res.data;

        // Set token to localstorage
        localStorage.setItem("jwtToken", token);

        // Set token to Auth header
        setAuthToken(token);

        // Decode token to get user data
        const decoded = jwt_decode(token);

        // Set current user
        dispatch(setCurrentUser(decoded));

        closeModal();
        notify("You have successfully logged in!", 1);

        if (redirect) navigate("/dashboard/booking");
      })
      .catch((err) => setErrors(err.response.data));
  };

  return (
    <div
      className="hidden fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full justify-center items-center"
      style={{ display: show === "login" ? "flex" : "none" }}
    >
      <div className="relative w-full h-full max-w-md md:h-auto">
        <div className="relative bg-white shadow">
          <button
            id="login-close-btn"
            type="button"
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
              Sign in to get started
            </h3>
            <form className="space-y-6" noValidate onSubmit={onSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value.replace(/\s+/g, "").toLowerCase());
                  }}
                />
                {errors.email && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                    <span className="font-medium">Oh, snapp!</span>{" "}
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your password
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                {errors.password && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                    <span className="font-medium">Oh, snapp!</span>{" "}
                    {errors.password}
                  </p>
                )}
              </div>
              <div className="flex justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                      required
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  to="/forgot"
                  className="text-sm text-[#F8981D] hover:underline"
                >
                  Lost Password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-white hover:text-[#F8981D] bg-[#F8981D] hover:bg-white border hover:border-[#F8981D] font-medium text-sm px-5 py-2.5 text-center"
              >
                Login to your account
              </button>
              <div className="text-sm font-medium text-gray-500">
                {" "}
                Not Registered?
                <Link
                  to="#"
                  onClick={navModal}
                  className="text-[#F8981D] hover:underline ml-2"
                >
                  Create an account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
