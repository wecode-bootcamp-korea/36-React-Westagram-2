import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.scss';
import Signup from './SignUp';

const Login = () => {
  // Review: 불필요한 state
  // const [disabled, setDisabled] = useState(true);
  // const [btnName, setBtnName] = useState('loginBtn');

  const [userInfo, setUserINfo] = useState({
    email: '',
    password: '',
  });
  const isUserInputValid = userInfo.email.length > 1 && userInfo.password.length > 5
  const btnName = (isUserInputValid) ? "loginBtnActive" : "loginBtn"

  // Review: 변수명
  // data, info
  // array, string, object
  // const users
  const [signupState, setSignupState] = useState(false);

  const onOffSignup = () => {
    setSignupState(!signupState);
  };

  const navigate = useNavigate();

  // Review: 함수명
  const getUserInfo = e => {
    const { name, value } = e.target;
    setUserINfo({ ...userInfo, [name]: value });
  };

  const checkId = /[@]/;

  // Review: 함수명
  const loginVali = () => {
    userInfo.password.length >= 5 &&
    checkId.test(userInfo.email) &&
    userInfo.email.length >= 1
      ? stateConvert(false, 'loginBtnActive')
      : stateConvert(true, 'loginBtn');
  };

  const stateConvert = (boolean, className) => {
    setDisabled(boolean);
    setBtnName(className);
  };


  const loginToMain = () => {
    fetch('http://10.58.5.66:3000/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userInfo.email,
        password: userInfo.password,
      }),
    })
      .then(res => res.json())
      .then(alert('login success!'))
      .then(data => localStorage.setItem('token', data.accessToken))
      // .then(console.log(localStorage.getItem('token')))
      .then(navigate('/main-youngjun'))
      .catch(rej => alert(rej));
      // Review: 동작 X
  };

  // Review: className
  return (
    <>
      <main className="login">
        <header className="logoHeader"> westagram </header>
        <div className="inputBox">
          <input
            name="email"
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
            type="button"
            disabled={!isUserInputValid}
            onClick={loginToMain}
          >
            로그인
          </button>
        </div>
        <p className="what" onClick={onOffSignup}>
          회원가입
        </p>
        <p className="what">비밀번호를 잊으셨나요?</p>
      </main>
      {signupState && (
        <Signup setSignupState={setSignupState} onoffSignup={onOffSignup} />
      )}
    </>
  );
};

export default Login;
