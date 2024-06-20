import React from "react";

import "./HomeProduct.css";
import Top from "../../components/top/Top";

import { IoIosArrowBack } from "react-icons/io";

const HomeProduct = () => {
  return (
    <div className="HomeProduct">
      <Top />
      <div className="header-sec">
        <div className="title">
          <IoIosArrowBack size={26} />
        </div>
        <div className="best">Girls Best</div>
        <div className="alarm">알림</div>
      </div>

      <div className="photo-sec">사진</div>

      <div className="item-sec">
        <div className="item">
          <div className="item-name">Pink Bags</div>
          <div className="item-interest">관심</div>
        </div>
        <p className="nickname">닉네임</p>
        <p className="price">가격</p>
        <p className="sentence">소개글</p>
      </div>
      <div className="question-sec">
        <div className="button">버튼</div>
        <div className="write">설명글</div>
      </div>
    </div>
  );
};

export default HomeProduct;
