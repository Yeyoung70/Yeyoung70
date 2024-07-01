import React, { useRef, useState } from "react";
import "./MoveModal.css";

const MoveModal = ({ isOpen, closeModal, children }) => {
  const modalRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = modalRef.current.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (!isOpen) return null;

  return (
    <div className="moveModal" onClick={closeModal}>
      <div
        className="moveModal-content"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 이벤트 전파 막기
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          position: "absolute",
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        <button className="close" onClick={closeModal}></button>
        {children}
      </div>
    </div>
  );
};

export default MoveModal;
