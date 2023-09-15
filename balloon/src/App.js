import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth } from "./app/authSlice";
import PrivateRoute from "./utils/PrivateRoute";
import "./App.css";

const Home = lazy(() => import("./component/landing/home/Home"));
const Balloons = lazy(() => import("./component/landing/balloons/Balloons"));
const BalloonDetail = lazy(() =>
  import("./component/landing/balloons/BalloonDetail")
);
const HowToBuy = lazy(() => import("./component/landing/contact/HowToBuy"));
const About = lazy(() => import("./component/landing/contact/About"));
const Contact = lazy(() => import("./component/landing/contact/Contact"));
const Privacy = lazy(() => import("./component/landing/contact/Privacy"));
const Terms = lazy(() => import("./component/landing/contact/Terms"));
const AdDashboard = lazy(() =>
  import("./component/admin/dashboard/AdDashboard")
);
const AdBalloons = lazy(() => import("./component/admin/balloon/AdBalloons"));
const AdCategory = lazy(() => import("./component/admin/balloon/AdCategory"));
const AdSetting = lazy(() => import("./component/admin/dashboard/AdSetting"));

const renderLoader = () => <p>Loading</p>;

function App() {
  const auth = useSelector(getAuth);

  return (
    <Suspense fallback={renderLoader()}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/balloons/:category_name" element={<Balloons />} />
          <Route path="/balloon/detail/:code" element={<BalloonDetail />} />
          <Route path="/how_to_buy" element={<HowToBuy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
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
          <Route
            path="/admin/setting/:user_id"
            element={
              <PrivateRoute auth={localStorage.jwtToken}>
                <AdSetting />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
