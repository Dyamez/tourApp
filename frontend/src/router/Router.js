import React from "react";
import Home from "../tabs/Home";
import Enlist from "../tabs/Enlist";
import Info from "../tabs/Info";
import Login from "../tabs/Login";
import Details from "../tabs/Details";
import Results from "../tabs/Results";
import Tripping from "../tabs/Tripping";
import { Navigate, Routes, Route } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="enlist" element={<Enlist />} />
      <Route path="tripping/:id" element={<Info />} />
      <Route path="login" element={<Login />} />
      <Route path="tripping/search" element={<Results />} />
      <Route path="tripping" element={<Tripping />} />
      <Route path="details" element={<Details />} />
    </Routes>
  );
}

//<Route path="/tripping/:id" element={<Info />} />
