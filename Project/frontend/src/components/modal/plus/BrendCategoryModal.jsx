import React, { useState } from "react";

import WideModal from "../WideModal";

import { IoCloseOutline } from "react-icons/io5";

import "./BrendCategoryModal.css";

const BrendCategoryModal = ({ closeModal, setSelectedBrendCategory }) => {
  // 수정된 부분
  const categories = ["노브랜드", "세터", "브랜드2", "브랜드3", "브랜드4"];

  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const handleCategorySelect = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  const handleConfirmClick = () => {
    if (selectedSubcategory) {
      setSelectedBrendCategory(selectedSubcategory); // 수정된 부분
      closeModal();
    }
  };

  return (
    <WideModal isOpen={true}>
      <div className="brendCategory-modal">
        <div className="cancel" onClick={closeModal}>
          <IoCloseOutline size={30} />
        </div>
        <div className="title">브랜드를 선택해 주세요</div>
        <div className="line"></div>
        <div className="category-buttons">
          {categories.map((subcategory) => (
            <button
              key={subcategory}
              className={`category-button ${
                selectedSubcategory === subcategory ? "selected" : ""
              }`}
              onClick={() => handleCategorySelect(subcategory)}
            >
              {subcategory}
            </button>
          ))}
        </div>
        <div className="confirm">
          <button
            className="apply-button"
            onClick={handleConfirmClick}
            style={{
              backgroundColor: selectedSubcategory ? "#8f0456" : "#dadada",
              color: "#ffffff",
            }}
          >
            확인
          </button>
        </div>
      </div>
    </WideModal>
  );
};

export default BrendCategoryModal;
