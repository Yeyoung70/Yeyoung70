import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { article_sales_list } from "../../../api/myPage"; // 함수 파일 import
import SellingButton from "../../Button/deal/SellingButton";
import ReviewButton from "../../Button/deal/ReviewButton";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

import "./DealSoldout.css";
import DealSellModal from "../../modal/deal/DealSellModal";

const DealSoldout = () => {
  const navigate = useNavigate();
  const [salesList, setSalesList] = useState([]);
  const [showSellModal, setShowSellModal] = useState(false);

  useEffect(() => {
    const getSalesList = async () => {
      try {
        const user_pk = localStorage.getItem("user_pk"); // 유저 pk 가져오기
        const articles = await article_sales_list(user_pk);
        setSalesList(articles);
      } catch (error) {
        console.error("종료된 판매 목록을 불러오는 중 오류 발생:", error);
      }
    };

    getSalesList();
  }, []);

  const handleClick = (id) => {
    navigate(`/search?detail=${id}`);
  };

  const handleShowSellModal = () => {
    setShowSellModal(true);
  };

  const handleCloseSellModal = () => {
    setShowSellModal(false);
  };

  return (
    <div className="DealSoldout">
      {salesList.map((article) => (
        <div key={article.id} className="Soldout-sec">
          <div className="Soldout">
            <div className="photo">
              <img
                src={
                  article.product.product_images[0]?.image_url ||
                  "/path/to/default_image.png"
                }
                alt="card"
                className="card"
              />
            </div>
            <div className="info">
              <div className="deal-title">{article.title}</div>
              <div className="where">2주 전 {article.created_at}</div>
              <div className="price">
                <SellingButton onClick={() => handleClick(article.id)} />
                {article.product.price} 원
              </div>
              {showSellModal && (
                <DealSellModal closeModal={handleCloseSellModal} />
              )}
            </div>
          </div>
          <div className="review-sec">
            <div className="review">
              <ReviewButton onClick={() => handleClick(article.id)} />
            </div>
            <div className="add">
              <HiOutlineDotsHorizontal
                size={22}
                onClick={handleShowSellModal}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DealSoldout;
