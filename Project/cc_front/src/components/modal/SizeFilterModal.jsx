import React, { useState } from 'react';
import FilterButton from '../Button/category/FilterButton';
import './Modal.css';

const SizeFilterModal = ({ isOpen, onClose, sizes, activeFilters, onApply }) => {
    const [selectedSizes, setSelectedSizes] = useState(activeFilters.size || []);
  
    const handleSizeClick = (size) => {
      setSelectedSizes((prevSizes) =>
        prevSizes.includes(size)
          ? prevSizes.filter((s) => s !== size)
          : [...prevSizes, size]
      );
    };
  
    const handleApply = () => {
      onApply('size', selectedSizes);
      onClose();
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>X</button>
          <h4>Select Size</h4>
          <div className="size-samples">
            {sizes.map((size) => (
              <FilterButton
                key={size}
                label={size}
                isActive={selectedSizes.includes(size)}
                onClick={() => handleSizeClick(size)}
              />
            ))}
          </div>
          <button className="apply-button" onClick={handleApply}>Apply</button>
        </div>
      </div>
    );
  };
  
  export default SizeFilterModal;