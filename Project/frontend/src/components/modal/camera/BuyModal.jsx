import React from "react";
import { useNavigate } from "react-router-dom";

import card from "../../../assets/card/card_sample_3.png";

import "./BuyModal.css";
import MoveModal from "./MoveModal";

const BuyModal = ({ closeModal, cardSec }) => {
  const navigate = useNavigate();

  const handleCardSecClick = () => {
    navigate(`/product?cardsec=${cardSec}`);
  };

  return (
    <MoveModal isOpen={true} closeModal={closeModal}>
      <div className="buy-modal">
        <div className="topline"></div>
        <div className="title">이 상품들은 어떤가요?</div>

        <div className="buy-cards">
          <div className="card-sec" onClick={handleCardSecClick}>
            <img src={card} alt="Card" className="card" />
            <div className="name">username</div>
            <div className="category">category</div>
            <div className="price">50,000 won</div>
          </div>
          <div className="card-sec" onClick={handleCardSecClick}>
            <img src={card} alt="Card" className="card" />
            <div className="name">username</div>
            <div className="category">category</div>
            <div className="price">50,000 won</div>
          </div>
          <div className="card-sec" onClick={handleCardSecClick}>
            <img src={card} alt="Card" className="card" />
            <div className="name">username</div>
            <div className="category">category</div>
            <div className="price">50,000 won</div>
          </div>
          <div className="card-sec" onClick={handleCardSecClick}>
            <img src={card} alt="Card" className="card" />
            <div className="name">username</div>
            <div className="category">category</div>
            <div className="price">50,000 won</div>
          </div>
          <div className="card-sec" onClick={handleCardSecClick}>
            <img src={card} alt="Card" className="card" />
            <div className="name">username</div>
            <div className="category">category</div>
            <div className="price">50,000 won</div>
          </div>
          <div className="card-sec" onClick={handleCardSecClick}>
            <img src={card} alt="Card" className="card" />
            <div className="name">username</div>
            <div className="category">category</div>
            <div className="price">50,000 won</div>
          </div>
        </div>
      </div>
    </MoveModal>
  );
};

export default BuyModal;
