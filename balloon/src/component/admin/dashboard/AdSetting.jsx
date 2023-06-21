import React, { useState } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import notify from "../../../utils/notify";
import AdLayout from "../layout/AdLayout";

const AdSetting = () => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({});

  const pwdUpdate = (e) => {
    e.preventDefault();

    const newPwd = {
      password,
      password2,
    };

    axios
      .post(process.env.REACT_APP_API_BASE_URL + "api/auth/pwd", newPwd)
      .then((res) => {
        setErrors({});
        notify("You updated successfully!", 1);
      })
      .catch((err) => {
        setErrors(err.response.data);
        notify("Something went wrong!", 0);
      });
  };

  return (
    <div>
      <Toaster position="top-right" />
      <AdLayout />
      <div className="mt-[140px] sm:mt-[70px] p-4 sm:ml-64">
        <div className="mt-6 p-4 bg-white rounded-lg md:p-8">
          <form noValidate onSubmit={pwdUpdate}>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                />
                {errors.password && (
                  <p className="mt-2 text-xs text-red-600">
                    <span className="font-medium">Oh, snapp!</span>{" "}
                    {errors.password}
                  </p>
                )}
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  New Password
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  onChange={(e) => {
                    setPassword2(e.target.value);
                  }}
                  value={password2}
                />
                {errors.password2 && (
                  <p className="mt-2 text-xs text-red-600">
                    <span className="font-medium">Oh, snapp!</span>{" "}
                    {errors.password2}
                  </p>
                )}
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Confirm password
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="text-white hover:text-[#F8981D] border hover border-[#F8981D] bg-[#F8981D] hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdSetting;
