import React from 'react'

import { Link, useLocation } from 'react-router-dom'

import { FaHouse, FaChartLine, FaBars } from "react-icons/fa6";
import { FaGem, FaShoppingBag } from "react-icons/fa";

import './BottomNav.css'

const BottomNav = () => {
  // const location = useLocation();
  // location.pathname
  // 구조분해할당 키 이름을 변수로
  // location = {
  //   pathname: '/',
  //   etc: 'abc',
  // }
  const { pathname } = useLocation();
  // pathname = '/'

  return (
    <div className="BottomNav">
        {/* bottom navigation */}
        {/* 'active' if true else '' */}
        {/* '3' == 3 true */}
        {/* '3' === 3 false  */}
        <Link to={"/"} className={ pathname === '/' ? 'active' : '' } >
            <span> <FaHouse size={24} /> </span> <span>홈</span> 
        </Link>
        <Link to={"/benefit"} className={ pathname === '/benefit' ? 'active' : '' }> 
            <span> <FaGem size={24} /> </span> <span>혜택</span> 
        </Link>
        <Link to={"/pay"} className={ pathname === '/pay' ? 'active' : '' }> 
          <span> <FaShoppingBag size={24} /> </span> <span>주스페이</span> 
        </Link>
        <Link to={"/stock"} className={ pathname === '/stock' ? 'active' : '' }> 
          <span> <FaChartLine size={24} /> </span> <span>주식</span> 
        </Link>
        <Link to={"/menu"} className={ pathname === '/menu' ? 'active' : '' }> 
          <span> <FaBars size={24} /> </span> <span>메뉴</span> 
        </Link>
    </div>
  )
}

export default BottomNav