import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import IconButton from "@mui/material/IconButton";

import BottomNav from "../../../components/BottomNav/BottomNav";
import BrendCategoryModal from "../../../components/modal/plus/BrendCategoryModal";
import StatusCategoryModal from "../../../components/modal/plus/StatusCategoryModal";

import { IoIosArrowForward } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";

import "./Buy.css";

function Buy() {
  const [source, setSource] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [showBrendCategoryModal, setShowBrendCategoryModal] = useState(false);
  const [selectedBrendCategory, setSelectedBrendCategory] = useState("");
  const [showStatusCategoryModal, setShowStatusCategoryModal] = useState(false);
  const [selectedStatusCategory, setSelectedStatusCategory] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  const isAIButtonEnabled =
    selectedBrendCategory && selectedStatusCategory && imageUrls.length > 0;

  useEffect(() => {
    if (location.state && location.state.imageUrl) {
      setImageUrls([location.state.imageUrl]);
    }
  }, [location.state]);

  const handleCapture = (target) => {
    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      if (!file.type.startsWith("image/")) {
        alert("이미지 파일을 선택해 주세요");
        return;
      }
      const newUrl = URL.createObjectURL(file);
      setSource(newUrl);
      setImageUrls((prevUrls) => [...prevUrls, newUrl]);
    }
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

  const handleAiReco = () => {
    if (isAIButtonEnabled) {
      navigate("/predict", {
        state: { imageUrls, selectedBrendCategory, selectedStatusCategory },
      });
    }
  };

  return (
    <div className="Buy">
      <Grid container>
        <Grid item xs={12}>
          <div className="title">원하는 상품의 정보를 입력해 주세요</div>
          <div className="form-sec">
            <div className="photo">
              <div className="photo-text">상품 사진</div>
              <div className="photo-box">
                <div className="box" style={{ position: "relative" }}>
                  {imageUrls.length === 0 && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        document.getElementById("icon-button-file").click()
                      }
                    >
                      <FaCirclePlus size={26} color="#000" />
                    </div>
                  )}
                  <input
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    capture="environment"
                    onChange={(e) => handleCapture(e.target)}
                    className="input"
                    style={{ display: "none" }}
                  />
                  {imageUrls.map((url, index) => (
                    <Box key={index} className="imgBox">
                      <img src={url} alt="상품 이미지" className="img" />
                    </Box>
                  ))}
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
                setSelectedBrendCategory={setSelectedBrendCategory}
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
                setSelectedStatusCategory={setSelectedStatusCategory}
              />
            )}

            <div className="ai-button">
              <button
                className="apply-button"
                onClick={handleAiReco}
                style={{
                  backgroundColor: isAIButtonEnabled ? "#8f0456" : "#dadada",
                  color: "#ffffff",
                  cursor: isAIButtonEnabled ? "pointer" : "not-allowed",
                }}
                disabled={!isAIButtonEnabled}
              >
                AI 측정하기
              </button>
            </div>
          </div>
        </Grid>
      </Grid>

      <BottomNav />
    </div>
  );
}

export default Buy;
