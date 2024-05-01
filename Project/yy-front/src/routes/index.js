import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Pay from "../pages/Pay";
import Menu from "../pages/Menu";
import Benefit from "../pages/Benefit";
import Stock from "../pages/Stock";



const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/benefit" element={<div> <Benefit /> </div>} />
        <Route path="/pay" element={<div> <Pay /> </div>} />
        <Route path="/stock" element={<div> <Stock /> </div>} />
        <Route path="/menu" element={<div> <Menu /> </div>} />
    </Routes>
  );
};

export default AllRoutes;