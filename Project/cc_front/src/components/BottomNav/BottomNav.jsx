import React from "react";

import { Link } from "react-router-dom";

import "./BottomNav.css";

import { FaHouse } from "react-icons/fa6";

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <Link to={"/"}>
        <span>
          <FaHouse size={24} />
        </span>
        <span>홈</span>
      </Link>
      <Link to={"/search"}>
        <span>검색</span>
      </Link>
      <Link to={"/plus"}>
        <span>판매/구매</span>
      </Link>
      <Link to={"/deal"}>
        <span>거래</span>
      </Link>
      <Link to={"/my"}>
        <span>마이페이지</span>
      </Link>
    </div>
  );
};

export default BottomNav;
