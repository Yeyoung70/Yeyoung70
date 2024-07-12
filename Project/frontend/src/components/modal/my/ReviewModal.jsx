import React from "react";

import DownModal from "../alarm/DownModal";

import "./ReviewModal.css";

import { IoIosArrowForward } from "react-icons/io";

// import { IoCloseOutline } from "react-icons/io5";
// import CheckButton from "../../Button/CheckButton";

const ReviewModal = ({ closeModal, cardSec }) => {
  return (
    <DownModal isOpen={true} closeModal={closeModal}>
      <div className="review-modal">
        <div className="topline"></div>
        <div className="title">나의 리뷰</div>
        <div className="receive-sec">
          <div className="manner">
            <div className="receive-text">받은 거래 후기</div>
            <div className="icon">
              <IoIosArrowForward size={20} />
            </div>
          </div>
          <div className="line"></div>
          <div className="manner">
            <div className="receive-text">작성 거래 후기</div>
            <div className="icon">
              <IoIosArrowForward size={20} />
            </div>
          </div>
        </div>
      </div>
    </DownModal>
  );
};

export default ReviewModal;
