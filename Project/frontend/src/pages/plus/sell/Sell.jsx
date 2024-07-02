import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Sell.css";

import BottomNav from "../../../components/BottomNav/BottomNav";
import GuideModal from "../../../components/modal/GuideModal";

import { FaCirclePlus } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

import SellCategoryModal from "../../../components/modal/SellCategoryModal";
// import SellOptionModal from "../../../components/modal/SellOptionModal";
import SellButton from "../../../components/Button/SellButton";
import AiButton from "../../../components/Button/plus/AiButton";
import BrendCategoryModal from "../../../components/modal/plus/BrendCategoryModal";
import StatusCategoryModal from "../../../components/modal/plus/StatusCategoryModal";
import Placeholder from "../../../components/placeholder/Placeholder";

const Sell = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [selectedCategory, setSelectedcategory] = useState("");
  const [showBrendCategoryModal, setShowBrendCategoryModal] = useState(false);
  const [selectedBrendCategory, setSelectedBrendcategory] = useState("");
  const [showStatusCategoryModal, setShowStatusCategoryModal] = useState(false);
  const [selectedStatusCategory, setSelectedStatuscategory] = useState("");
  // const [showOptionModal, setShowOptionModal] = useState(false);
  // const [selectedOption, setSelectedoption] = useState("");
  const navigate = useNavigate();

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowCategoryModal = () => {
    setShowCategoryModal(true);
  };

  const handleCloseCategoryModal = () => {
    setShowCategoryModal(false);
  };

  const handleShowBrendCategoryModal = () => {
    setShowBrendCategoryModal(true);
  };

  const handleCloseBrendCategoryModal = () => {
    setShowBrendCategoryModal(false);
  };

  const handleShowStatusCategoryModal = () => {
    setShowStatusCategoryModal(true);
  };

  const handleCloseStatusCategoryModal = () => {
    setShowStatusCategoryModal(false);
  };

  // const handleShowOptionModal = () => {
  //   setShowOptionModal(true);
  // };

  // const handleCloseOptionModal = () => {
  //   setShowOptionModal(false);
  // };

  const handleQuestClick = () => {
    navigate(`/search`);
  };

  return (
    <div className="Sell">
      <div className="guide-sec" onClick={handleShowModal}>
        <div className="guide-text-1">상품을 올리기 전에 사진촬영 가이드를</div>
        <div className="guide-text-2">꼭 읽어주세요</div>
      </div>
      {showModal && <GuideModal closeModal={handleCloseModal} />}
      <div className="form-sec">
        <div className="photo">
          <div className="photo-text">상품 사진</div>
          <div className="photo-box">
            <div className="box">
              <FaCirclePlus size={26} className="box-icon" />
            </div>
          </div>
        </div>
        <div className="brend">
          <div className="text">브랜드</div>
          <div className="select" onClick={handleShowBrendCategoryModal}>
            {selectedBrendCategory ? selectedBrendCategory : "선택"}{" "}
            <IoIosArrowForward size={22} className="icon" />
          </div>
        </div>
        {showBrendCategoryModal && (
          <BrendCategoryModal
            closeModal={handleCloseBrendCategoryModal}
            setSelectedBrendcategory={setSelectedBrendcategory}
          />
        )}
        <div className="status">
          <div className="text">상품 상태</div>
          <div className="select" onClick={handleShowStatusCategoryModal}>
            {selectedStatusCategory ? selectedStatusCategory : "선택"}{" "}
            <IoIosArrowForward size={22} className="icon" />
          </div>
        </div>
        {showStatusCategoryModal && (
          <StatusCategoryModal
            closeModal={handleCloseStatusCategoryModal}
            setSelectedStatuscategory={setSelectedStatuscategory}
          />
        )}
        <div className="ai-button">
          <AiButton onClick={handleQuestClick} />
        </div>

        <div className="info">
          <div className="title">
            <div className="title-text">
              <div className="left">상품 제목</div>
              <div className="right">0 / 30</div>
            </div>
            <div className="title-box">
              <input
                type="text"
                className="product-input"
                placeholder="상품 제목을 입력하세요"
              />
            </div>
          </div>
          <div className="content">
            <div className="content-text">
              <div className="left">상품 설명</div>
              <div className="right">0 / 2500</div>
            </div>
            <div className="content-box">
              <Placeholder />
            </div>
          </div>
        </div>
        <div className="category">
          <div className="text">카테고리</div>
          <div className="select" onClick={handleShowCategoryModal}>
            {selectedCategory ? selectedCategory : "선택"}{" "}
            <IoIosArrowForward size={22} className="icon" />
          </div>
        </div>
        {showCategoryModal && (
          <SellCategoryModal
            closeModal={handleCloseCategoryModal}
            setSelectedcategory={setSelectedcategory}
          />
        )}
        <div className="sell-button">
          <SellButton onClick={handleQuestClick} />
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Sell;
