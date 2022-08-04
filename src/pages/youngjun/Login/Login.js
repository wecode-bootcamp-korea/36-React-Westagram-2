import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.scss';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [button, setBtnStyle] = useState('loginBtn');

  const navigate = useNavigate();

  const mainPageRouter = () => {
    navigate('/main-youngjun');
  };

  const saveUserId = e => {
    setUserId(e.target.value);
  };

  const saveUserPassword = e => {
    setUserPassword(e.target.value);
  };

  const checkSpc = /[@]/;

  const loginVali = () => {
    userPassword.length >= 5 && checkSpc.test(userId) && userId.length >= 1
      ? stateConvert(false, 'loginBtnActive')
      : stateConvert(true, 'loginBtn');
  };

  const stateConvert = (boolean, className) => {
    setDisabled(boolean);
    setBtnStyle(className);
  };

  return (
    <main className="container">
      <header className="logoHeader"> westagram </header>
      <form className="inputBox">
        <input
          className="userId"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={saveUserId}
          onKeyUp={loginVali}
          value={userId}
        />
        <input
          className="password"
          type="password"
          placeholder="비밀번호"
          onChange={saveUserPassword}
          onKeyUp={loginVali}
          value={userPassword}
        />
        <button
          className={button}
          type="button"
          disabled={disabled}
          onClick={mainPageRouter}
        >
          로그인
        </button>
      </form>
      <p className="what"> 비밀번호를 잊으셨나요? </p>
    </main>
  );
};

export default Login;
