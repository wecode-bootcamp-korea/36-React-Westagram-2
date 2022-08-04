import React from "react";
import "./Login.scss";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/main");
  };

  return (
    <div id="loginWholePage">
      <div className="login_page_container">
        <p className="main_logo logo_font">Westagram</p>
        <div className="id_wrapper">
          <input
            className="id id_pw_input_box"
            type="text"
            placeholder=" 전화번호, 사용자 이름 또는 이메일"
          />
          <input
            className="pw id_pw_input_box"
            type="password"
            placeholder=" 비밀번호"
          />
          <button className="login_btn" onClick={goToMain} disabled>
            로그인
          </button>
          <a
            className="forgotPw"
            href="https://www.instagram.com/accounts/password/reset/"
          >
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
