import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserRegister from "../pages/auth/UserRegister";
import UserLogin from "../pages/auth/UserLogin";
import PartnerRegister from "../pages/auth/PartnerRegister";
import PartnerLogin from "../pages/auth/PartnerLogin";
import Home from "../pages/general/Home";
import CreateFoodPartner from "../pages/food-partner/CreateFoodPartner";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/food-partner/register" element={<PartnerRegister />} />
        <Route path="/food-partner/login" element={<PartnerLogin />} />
        <Route path="/" element={<Home />} />
        <Route path="/create-food" element={<CreateFoodPartner/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
