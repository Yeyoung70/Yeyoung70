import React from 'react';
import BasicButton from './BasicButton';
import './FilterButton.css';

const FilterButton = ({ label, onClick, isActive }) => {
  return (
    <BasicButton className={`filter-button ${isActive ? 'active' : ''}`} onClick={onClick}>
      {label}
    </BasicButton>
  );
};

export default FilterButton;