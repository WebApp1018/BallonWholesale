import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth } from "./app/authSlice";
import Home from "./component/landing/home/Home";
import Balloons from "./component/landing/balloons/Balloons";
import BalloonDetail from "./component/landing/balloons/BalloonDetail";
import HowToBuy from "./component/landing/contact/HowToBuy";
import About from "./component/landing/contact/About";
import Contact from "./component/landing/contact/Contact";
import AdDashboard from "./component/admin/dashboard/AdDashboard";
import AdBalloons from "./component/admin/balloon/AdBalloons";
import AdCategory from "./component/admin/balloon/AdCategory";
import PrivateRoute from "./utils/PrivateRoute";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const auth = useSelector(getAuth);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/balloons/:category_name" element={<Balloons />} />
        <Route path="/balloon/detail/:code" element={<BalloonDetail />} />
        <Route path="/how_to_buy" element={<HowToBuy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/balloons/:category_name" element={<Balloons />} />
        <Route path="/balloon/detail/:code" element={<BalloonDetail />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute auth={localStorage.jwtToken}>
              <AdDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/balloon_setting"
          element={
            <PrivateRoute auth={localStorage.jwtToken}>
              <AdBalloons />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/category"
          element={
            <PrivateRoute auth={localStorage.jwtToken}>
              <AdCategory />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
