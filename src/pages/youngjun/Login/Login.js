import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.scss';
import Signup from './SignUp';

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [signupModal, setSignupModal] = useState(false);

  const onOffSignup = () => {
    setSignupModal(!signupModal);
  };

  const checkId = /[@]/;

  const isUserInputValid =
    userInfo.password.length >= 5 &&
    checkId.test(userInfo.email) &&
    userInfo.email.length >= 1;

  const btnName = isUserInputValid ? 'loginBtnActive' : 'loginBtn';

  const navigate = useNavigate();

  const setUserInput = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
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
  };

  return (
    <>
      <main className="Login">
        <h1 className="logoHeader"> westagram </h1>
        <div className="inputBox">
          <input
            name="email"
            className="userId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={setUserInput}
          />
          <input
            name="password"
            className="password"
            type="password"
            placeholder="비밀번호"
            onChange={setUserInput}
          />
          <button
            className={btnName}
            type="button"
            disabled={isUserInputValid}
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
      {signupModal && <Signup onoffSignup={onOffSignup} />}
    </>
  );
};

export default Login;
