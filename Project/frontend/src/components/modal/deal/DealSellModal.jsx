import React from "react";

import ShortModal from "../../modal/my/ShortModal";

import "./DealSellModal.css";

const DealSellModal = ({ closeModal }) => {
  return (
    <ShortModal isOpen={true} closeModal={closeModal}>
      <div className="dealSell-modal">
        <div className="topline"></div>

        <div className="dealSell-sec">
          <div className="text">판매중</div>
          <div className="text">게시물 수정</div>
          <div className="text">삭제하기</div>
        </div>
      </div>
    </ShortModal>
  );
};

export default DealSellModal;
