import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserRegister from "../pages/auth/UserRegister";
import UserLogin from "../pages/auth/UserLogin";
import PartnerRegister from "../pages/auth/PartnerRegister";
import ChooseRegister from '../pages/auth/ChooseRegister';
import PartnerLogin from "../pages/auth/PartnerLogin";
import Home from "../pages/general/Home";
import CreateFoodPartner from "../pages/food-partner/CreateFoodPartner";
import Profile from "../pages/food-partner/Profile";
import Saved from '../pages/general/Saved';
import BottomNav from '../components/BottomNav';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<ChooseRegister />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/food-partner/register" element={<PartnerRegister />} />
        <Route path="/food-partner/login" element={<PartnerLogin />} />
        <Route path="/reels" element={<><Home /><BottomNav /></>} />
        <Route path="/saved" element={<><Saved /><BottomNav /></>} />
        <Route path="/create-food" element={<CreateFoodPartner/>} />
        <Route path="/foodpartner/:id" element={<Profile/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;