import React from "react";
import "./BottomNav.css";

import { Link, useLocation } from "react-router-dom";

import { RiHomeHeartFill } from "react-icons/ri";
import { FaChartLine, FaBars } from "react-icons/fa6";
import { FaGem, FaShoppingBag } from "react-icons/fa";

const BottomNav = () => {

  const { pathname } = useLocation();

  return (
    <div className="bottom-nav">
        <Link className= { pathname === '/' ? 'active' : '' } to={"/"}> <span><RiHomeHeartFill size={25} /></span> <span>홈</span> </Link>
        <Link className= { pathname === '/benefit' ? 'active' : '' }to={"/benefit"}> <span><FaGem size={22}/></span> <span>혜택</span></Link>
        <Link className= { pathname === '/pay' ? 'active' : '' }to={"/pay"}><span><FaShoppingBag size={22}/></span> <span>쥬스페이</span></Link>
        <Link className= { pathname === '/stock' ? 'active' : '' }to={"/stock"}><span><FaChartLine size={22}/></span> <span>주식</span></Link>
        <Link className= { pathname === '/menu' ? 'active' : '' }to={"/menu"}><span><FaBars size={22}/></span> <span>메뉴</span></Link>
    </div>
  )
}

export default BottomNav