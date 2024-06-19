import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // 외부 CSS 파일을 사용한다고 가정

import logo from "../image/logo_basic.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 간단한 유효성 검사
    if (email === "" || password === "") {
      setError("Both fields are required");
      return;
    }

    // 로그인 로직 처리
    if (email === "user@example.com" && password === "password") {
      navigate("/home");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <form onSubmit={handleSubmit} className="form">
        {error && <p className="error-message">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email"
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Password"
          className="input-field"
        />
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
      <div>
        <li>회원가입/찾기</li>
        <li>로그인 오류</li>
      </div>
    </div>
  );
};

export default Login;
