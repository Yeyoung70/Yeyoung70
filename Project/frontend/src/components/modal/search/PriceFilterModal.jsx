import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import ReactSlider from "react-slider";
import "./PriceFilterModal.css";

const PriceFilterModal = ({ isOpen, onClose, activeFilters, onApply }) => {
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 999999999]);

  useEffect(() => {
    if (activeFilters.length === 2) {
      setSelectedPriceRange(activeFilters);
    }
  }, [activeFilters]);

  const handleApply = () => {
    onApply("price", selectedPriceRange);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="price-modal" onClick={onClose}>
      <div className="price-content" onClick={(e) => e.stopPropagation()}>
        <button className="cancel" onClick={onClose}>
          <IoCloseOutline size={30} />
        </button>
        <div className="price-title">가격 범위를 선택하세요</div>
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="thumb"
          trackClassName="track"
          value={selectedPriceRange}
          min={0}
          max={999999}
          step={1000}
          onChange={(value) => setSelectedPriceRange(value)}
          renderThumb={(props, state) => (
            <div {...props} key={state.index}>
              {state.valueNow}
            </div>
          )}
        />
        <div className="price-range">
          <span>{selectedPriceRange[0]} 원</span>
          <span>{selectedPriceRange[1]} 원</span>
        </div>
        <div className="price-button">
          <button
            className="apply-button"
            onClick={handleApply}
            style={{
              backgroundColor:
                selectedPriceRange[0] !== 0 ||
                selectedPriceRange[1] !== 999999999
                  ? "#8f0456"
                  : "#dadada",
              color: "#ffffff",
            }}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceFilterModal;
