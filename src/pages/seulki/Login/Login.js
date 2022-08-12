import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import './Login.scss';

function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const saveUserId = e => {
    setId(e.target.value);
  };

  const saveUserPw = e => {
    setPw(e.target.value);
  };

  const buttonStatus = (id, pw) => {
    return id.includes('@') && pw.length >= 5;
  };

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-seulki');
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
            value={id}
            onChange={saveUserId}
          />
          <input
            className="pw id_pw_input_box"
            type="password"
            placeholder=" 비밀번호"
            valuse={pw}
            onChange={saveUserPw}
          />
          <Button
            key={1}
            id={id}
            pw={pw}
            buttonStatus={buttonStatus}
            goToMain={goToMain}
          />
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
