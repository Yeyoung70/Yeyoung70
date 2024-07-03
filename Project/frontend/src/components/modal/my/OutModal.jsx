import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CenterModal from "./CenterModal";
import { deleteAccount } from "../../../api/auth";

import "./OutModal.css";

import { IoCloseOutline } from "react-icons/io5";
import DeleteButton from "../../Button/DeleteButton";

const OutModal = ({ closeModal }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      setError("로그인이 필요합니다. 다시 로그인해 주세요.");
    }
  }, []);

  const handleOut = async () => {
    try {
      if (!userId) {
        throw new Error("No user ID available");
      }

      const response = await deleteAccount(userId, username, password);
      console.log("Account deletion successful:", response);
      navigate("/login");
    } catch (error) {
      console.error("Account deletion failed:", error);
      if (
        error.message === "No access token available" ||
        error.message === "No user ID available"
      ) {
        setError("로그인이 필요합니다. 다시 로그인해 주세요.");
        navigate("/login");
      } else {
        setError("계정 삭제에 실패했습니다. 다시 시도해 주세요.");
      }
    }
  };

  return (
    <CenterModal isOpen={true}>
      <div className="out-modal">
        <div className="cancel">
          <IoCloseOutline size={30} onClick={closeModal} />
        </div>
        <div className="title">회원 탈퇴</div>
        <div className="line"></div>
        <div className="text-1">정말 탈퇴하시겠어요?</div>
        <div className="text-2">
          탈퇴 버튼 선택 시, 계정은 삭제되며 복구되지 않습니다
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="이름을 입력해 주세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-fields"
          />
          <input
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-fields"
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="button">
          <DeleteButton onClick={handleOut} />
        </div>
      </div>
    </CenterModal>
  );
};

export default OutModal;
