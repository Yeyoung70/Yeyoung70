import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Search from "../pages/Search";
import Plus from "../pages/Plus";
import Deal from "../pages/Deal";
import My from "../pages/My";
import Login from "../pages/Login";
import Start from "../pages/Start";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/plus" element={<Plus />} />
      <Route path="/deal" element={<Deal />} />
      <Route path="/my" element={<My />} />
    </Routes>
  );
};

export default AllRoutes;
