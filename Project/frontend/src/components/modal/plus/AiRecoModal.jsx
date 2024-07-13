import React from "react";

import card from "../../../assets/card/product_sample_1.png";
import LongModal from "../my/LongModal";

import "./AiRecoModal.css";

const AiRecoModal = ({ closeModal }) => {
  const isAIButtonEnabled = true;

  return (
    <LongModal isOpen={true} closeModal={closeModal}>
      <div className="AiReco-modal">
        <div className="topline"></div>
        <div className="recommened-sec">
          <div className="title">AI가 추천해 드릴게요</div>
          <div className="result">
            <div className="price">10000 ~ 13000원</div>
            <div className="how">결과는 어떠신가요?</div>
          </div>
          <div className="buttons">
            <button
              className={`button ${isAIButtonEnabled ? "enabled" : ""}`}
              disabled={!isAIButtonEnabled}
            >
              직접 작성할래요
            </button>
            <button
              className={`button ${isAIButtonEnabled ? "enabled" : ""}`}
              disabled={!isAIButtonEnabled}
            >
              13000원으로 할래요
            </button>
          </div>
        </div>

        <div className="AiReco-cards">
          <div className="show">비슷한 상품을 보여드릴게요 </div>
          <div className="reco">
            <div className="reco-1">
              <div className="info-1">놀부심보 제품 안내</div>
              <div className="card-sec">
                <img src={card} alt="Card" className="card" />
                <div className="name">아디다스 가젤 스니커즈</div>
                <div className="price">239,000원</div>
              </div>
              <div className="card-sec">
                <img src={card} alt="Card" className="card" />
                <div className="name">아디다스 가젤 스니커즈</div>
                <div className="price">239,000원</div>
              </div>
              <div className="card-sec">
                <img src={card} alt="Card" className="card" />
                <div className="name">아디다스 가젤 스니커즈</div>
                <div className="price">239,000원</div>
              </div>
            </div>
            <div className="reco-2">
              <div className="info-2">다른 사이트 안내</div>
              <div className="card-sec">
                <img src={card} alt="Card" className="card" />
                <div className="name">아디다스 가젤 스니커즈</div>
                <div className="price">239,000원</div>
              </div>
              <div className="card-sec">
                <img src={card} alt="Card" className="card" />
                <div className="name">아디다스 가젤 스니커즈</div>
                <div className="price">239,000원</div>
              </div>
              <div className="card-sec">
                <img src={card} alt="Card" className="card" />
                <div className="name">아디다스 가젤 스니커즈</div>
                <div className="price">239,000원</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LongModal>
  );
};

export default AiRecoModal;
