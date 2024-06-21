import React from "react";

import "./Search.css";
import BottomNav from "../../components/BottomNav/BottomNav";

import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className="Search">
      <div className="search-sec">
        <div className="text">상품 및 유저 검색</div>
        <div className="icon">
          <IoSearchOutline size={26} />
        </div>
      </div>

      <div className="category-sec">
        <div className="first">
          <div className="item">전체</div>
          <div className="item">상의</div>
          <div className="item">바지</div>
          <div className="item">아우터</div>
          <div className="item">원피스</div>
          <div className="item">스커트</div>
        </div>
        <div className="line"></div>
        <div className="second">
          <div className="clothes">
            <div>반소매 티셔츠</div>
          </div>
          <div className="clothes">
            <div>후드</div>
          </div>
          <div className="clothes">
            <div>슬랙스</div>
          </div>
          <div className="clothes">
            <div>미니원피스</div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="option-sec">옵션</div>
      <BottomNav />
    </div>
  );
};

export default Search;
