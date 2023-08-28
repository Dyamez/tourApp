import React from "react";
import Home from "../tabs/Home";
import Enlist from "../tabs/Enlist";
import Info from "../tabs/Info";
import Login from "../tabs/Login";
import Results from "../tabs/Results";
import Tours from "../tabs/Tours";
import { Navigate, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="enlist" element={<Enlist />} />
      <Route path="tours/:id" element={<Info />} />
      <Route path="login" element={<Login />} />
      <Route path="tours/search" element={<Results />} />
      <Route path="tours" element={<Tours />} />
    </Routes>
  );
};

export default Router;
