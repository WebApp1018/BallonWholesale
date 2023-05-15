import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './component/landing/home/Home';
import Balloons from './component/landing/balloons/Balloons';
import BalloonDetail from './component/landing/balloons/BalloonDetail';
import AdDashboard from './component/admin/dashboard/AdDashboard';
import AdBalloons from './component/admin/balloon/AdBalloons';
import AdCategory from './component/admin/balloon/AdCategory';
import PrivateRoute from './utils/PrivateRoute';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path='/'
          element={<Home />} />
        <Route
          path='/balloons'
          element={<Balloons />} />
        <Route
          path='/balloon/detail'
          element={<BalloonDetail />} />
        <Route
          path='/admin'
          element={
            <PrivateRoute auth={localStorage.jwtToken}>
              <AdDashboard />
            </PrivateRoute>
          } />
        <Route
          path='/admin/balloon_setting'
          element={<AdBalloons />} />
        <Route
          path='/admin/category'
          element={<AdCategory />} />
      </Routes>
    </div>
  );
}

export default App;
