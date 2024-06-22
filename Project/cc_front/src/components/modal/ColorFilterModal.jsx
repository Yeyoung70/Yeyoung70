import React, { useState } from 'react';
import './Modal.css';

const ColorFilterModal = ({ isOpen, onClose, colors, activeFilters, onApply }) => {
  const [selectedColors, setSelectedColors] = useState(activeFilters.color || []);

  const handleColorClick = (color) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };

  const handleApply = () => {
    onApply('color', selectedColors);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        <h4>Select Color</h4>
        <div className="color-samples">
          {colors.map((color) => (
            <div
              key={color}
              className={`color-sample ${selectedColors.includes(color) ? 'selected' : ''}`}
              onClick={() => handleColorClick(color)}
              style={{ backgroundColor: color.toLowerCase() }}
            >
              <span>{color}</span>
            </div>
          ))}
        </div>
        <button className="apply-button" onClick={handleApply}>Apply</button>
      </div>
    </div>
  );
};

export default ColorFilterModal;
