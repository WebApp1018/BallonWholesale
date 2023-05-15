import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import { setCurrentUser } from "../../app/authSlice";
import notify from "../../utils/notify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

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

        notify("You have successfully logged in!", 1);

        navigate("/admin");
      })
      .catch((err) => {
        // console.log(err);
        setErrors(err.response.data);
      });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full justify-center items-center bg-[#007dc5]">
      <div className="fixed inset-0 flex justify-center items-center">
        <div className="bg-white shadow max-w-md w-full rounded-lg p-6">
          <div className="w-full h-full max-w-md md:h-auto">
            <div className="relative">
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
                        setEmail(
                          e.target.value.replace(/\s+/g, "").toLowerCase()
                        );
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
                    Login to your Admin area
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
