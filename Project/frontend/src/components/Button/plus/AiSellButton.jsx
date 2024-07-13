import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

const AiSellButton = ({ onClick }) => {
  return (
    <Button
      text="AI 추천으로 판매할래요"
      color="#dadada"
      textcolor="#000000"
      onClick={onClick}
    />
  );
};

AiSellButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AiSellButton;
