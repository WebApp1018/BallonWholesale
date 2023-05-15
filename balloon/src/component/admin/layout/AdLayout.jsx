import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../app/authSlice";
import SideBar from "./AdSideBar";
import NavBar from "./AdNavBar";

const AdLayout = () => {
  const dispatch = useDispatch();
  const [show_side_bar, setShowSideBar] = useState(true);

  return (
    <>
      <SideBar
        show_side_bar={show_side_bar}
        toggleBar={() => {
          setShowSideBar(show_side_bar ? false : true);
        }}
        logout={() => dispatch(logoutUser())}
      />
      <NavBar
        toggleBar={() => {
          setShowSideBar(show_side_bar ? false : true);
        }}
        logout={() => dispatch(logoutUser())}
      />
    </>
  );
};

export default AdLayout;
