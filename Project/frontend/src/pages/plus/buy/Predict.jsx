import React from "react";
import { useLocation } from "react-router-dom";
import "./Predict.css";
import BuyModal from "../../../components/modal/camera/BuyModal";

const Predict = () => {
  const location = useLocation();
  const { imageUrls } = location.state || {}; // 전달받은 상태에서 imageUrls 추출

  return (
    <div className="Predict">
      <div className="image">
        {imageUrls && imageUrls.length > 0 ? (
          imageUrls.map((url, index) => (
            <div key={index} className="imgBox">
              <img src={url} alt="Captured" className="img" />
            </div>
          ))
        ) : (
          <p>No image captured</p>
        )}
      </div>
      <div className="modal">
        <BuyModal />
      </div>
    </div>
  );
};

export default Predict;
