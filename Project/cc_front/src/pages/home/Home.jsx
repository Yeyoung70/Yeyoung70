import React from "react";

import BottomNav from "../../components/BottomNav/BottomNav";
import Top from "../../components/top/Top";

import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <Top />
      <div className="header">
        <div className="left">Caregory</div>
        <div className="right">알림</div>
      </div>

      <div className="cartegory-sec">
        <p>Top</p>
        <p>Bottom</p>
        <p>Outer</p>
        <p>Dress</p>
        <p>Skirt</p>
      </div>

      <div className="best-sec">Best</div>
      <BottomNav />
    </div>
  );
};

export default Home;
