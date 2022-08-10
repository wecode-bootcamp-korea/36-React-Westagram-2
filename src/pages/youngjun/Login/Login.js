import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.scss';
import Signup from './SignUp';

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const [btnName, setBtnName] = useState('loginBtn');
  const [userInfo, setUserINfo] = useState({
    id: '',
    password: '',
  });

  const [signupState, setSignupState] = useState(false);

  const onOffSignup = () => {
    setSignupState(!signupState);
  };

  const navigate = useNavigate();

  const mainPageRouter = e => {
    e.preventDefault();
    navigate('/main-youngjun');
  };

  const getUserInfo = e => {
    const { name, value } = e.target;
    setUserINfo({ ...userInfo, [name]: value });
  };

  const checkId = /[@]/;

  const loginVali = () => {
    userInfo.password.length >= 5 &&
    checkId.test(userInfo.id) &&
    userInfo.id.length >= 1
      ? stateConvert(false, 'loginBtnActive')
      : stateConvert(true, 'loginBtn');
  };

  const stateConvert = (boolean, className) => {
    setDisabled(boolean);
    setBtnName(className);
  };

  return (
    <>
      <main className="container">
        <header className="logoHeader"> westagram </header>
        <form className="inputBox">
          <input
            name="id"
            className="userId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={getUserInfo}
            onKeyUp={loginVali}
          />
          <input
            name="password"
            className="password"
            type="password"
            placeholder="비밀번호"
            onChange={getUserInfo}
            onKeyUp={loginVali}
          />
          <button
            className={btnName}
            disabled={disabled}
            onClick={mainPageRouter}
          >
            로그인
          </button>
        </form>
        <p className="what" onClick={onOffSignup}>
          회원가입
        </p>
        <p className="what"> 비밀번호를 잊으셨나요? </p>
      </main>
      {signupState && (
        <Signup setSignupState={setSignupState} onoffSignup={onOffSignup} />
      )}
    </>
  );
};

export default Login;
