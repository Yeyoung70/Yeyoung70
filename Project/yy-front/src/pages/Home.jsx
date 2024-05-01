import React from "react";
import { GoBell } from "react-icons/go";
import BottomNav from "../components/BottomNav/BottomNav";

import './Home.css'

const Home = () => {
  return (
    <div className="Home">
        <div className="header"></div>
        <div className="section"></div>
        <div className="section expense">지출</div>
        <div className="section fuction">추가 기능</div>

    </div>
  )
};

export default Home;