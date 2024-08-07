import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../api/auth";

import "./SignUp.css";

import { GoCheckCircle } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { SlArrowDown } from "react-icons/sl";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");
  const [profileImage] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignupClick = async () => {
    // 이메일 형식 체크
    if (!validateEmail(email)) {
      setError("올바른 이메일 형식으로 입력해 주세요.");
      return;
    }

    // 비밀번호 길이 체크
    if (password.length < 10) {
      setError("비밀번호는 10자 이상이어야 합니다.");
      return;
    }

    try {
      const response = await signUp(
        username,
        password,
        phone,
        nickname,
        email,
        profileImage
      );
      console.log("SignUp success", response);
      navigate("/welcome");
    } catch (error) {
      console.error("SignUp error", error);

      if (error.response && error.response.data) {
        const errorData = error.response.data;

        if (errorData.error) {
          if (errorData.error.includes("이메일")) {
            setError(`이미 존재하는 이메일 입니다.`);
          } else if (errorData.error.includes("닉네임")) {
            setError(`이미 존재하는 닉네임 입니다.`);
          } else if (errorData.error.includes("전화번호")) {
            setError(`이미 존재하는 전화번호 입니다.`);
          } else {
            setError("회원가입에 실패했습니다. 다시 시도해주세요.");
          }
        } else {
          setError("회원가입에 실패했습니다. 다시 시도해주세요.");
        }
      } else {
        setError("회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    }
  };

  const handleCardSecClick = () => {
    navigate(`/login`);
  };

  const isFormComplete = () => {
    return email && password && username && nickname && phone;
  };

  return (
    <div className="SignUp">
      <div className="header-sec">
        <div className="left">
          <IoIosArrowBack size={26} onClick={handleCardSecClick} />
        </div>
        <div className="right">회원가입</div>
      </div>

      <div className="putin-sec">
        <form className="sign-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="이메일을 입력해 주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
            className="sign-field"
            autoComplete="email"
          />
          <input
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Password"
            className="sign-field"
            autoComplete="current-password"
          />
          <input
            type="text"
            placeholder="이름을 입력해 주세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            aria-label="Username"
            className="sign-field"
          />
          <input
            type="text"
            placeholder="닉네임을 입력해 주세요"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            aria-label="Nickname"
            className="sign-field"
          />
          <input
            type="text"
            placeholder="휴대폰 번호를 -없이 입력해 주세요"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            aria-label="Phone"
            className="sign-field"
          />
          {/* 프로필 이미지 업로드 필드를 추가할 수도 있습니다. */}
        </form>
      </div>
      {error && <div className="error-message">{error}</div>}

      <div className="marketing-sec">
        <div className="icon">
          <GoCheckCircle size={30} />
        </div>
        <div className="text">
          신제품, 이벤트 안내 등 광고성 마케팅 수신 동의(선택)
        </div>
      </div>

      <div className="terms-sec">
        <div className="term">
          <div className="title">놀부심보 이용 약관</div>
          <div className="icon">
            <SlArrowDown size={18} />
          </div>
        </div>
        <div className="content">
          본인은 만 14세 이상이며, 위 약관 내용을 확인하였습니다
        </div>
      </div>

      <div className="signup-sec">
        <div
          className="id-button"
          onClick={handleSignupClick}
          style={{
            backgroundColor: isFormComplete() ? "#8f0456" : "#dadada",
            color: "#ffffff",
            cursor: isFormComplete() ? "pointer" : "not-allowed",
          }}
        >
          가입하기
        </div>
      </div>
    </div>
  );
};

export default SignUp;
