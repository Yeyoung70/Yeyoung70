import React, { useState } from "react";
import "./StatusCategoryModal.css";
import CategoryButton from "../../Button/category/CategoryButton";
import { LuPlus } from "react-icons/lu";
import WideModal from "../WideModal";
import CheckButton from "../../Button/CheckButton";
import ShortModal from "../my/ShortModal";

const StatusCategoryModal = ({ closeModal, setSelectedStatuscategory }) => {
  const categories = [
    "새 상품",
    "거의 새 상품",
    "사용감 있는 깨끗한 상품",
    "사용흔적이 많이 있는 상품",
    "새 상품(미개봉)",
  ];

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleConfirmClick = () => {
    if (selectedCategory) {
      setSelectedStatuscategory(selectedCategory);
      closeModal();
    }
  };

  return (
    <ShortModal isOpen={true}>
      <div className="statusCategory-modal">
        <div className="cancel" onClick={closeModal}>
          <LuPlus size={30} />
        </div>
        <div className="title">상태를 선택해 주세요</div>
        <div className="line"></div>
        <div className="category-buttons">
          {categories.map((category) => (
            <CategoryButton
              key={category}
              label={category}
              onClick={() => handleCategorySelect(category)}
              active={selectedCategory === category}
            />
          ))}
          <div className="confirm">
            <CheckButton type="submit" onClick={handleConfirmClick} />
          </div>
        </div>
      </div>
    </ShortModal>
  );
};

export default StatusCategoryModal;
