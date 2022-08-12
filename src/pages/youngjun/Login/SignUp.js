import React, { useState } from 'react';
import './Signup.scss';

const Signup = ({ onoffSignup }) => {
  const [userInfo, setUserINfo] = useState({
    email: '',
    password: '',
  });

  const closeSignup = e => {
    if (e.target === e.currentTarget) {
      onoffSignup();
    }
  };

  const getUserInfo = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserINfo({ ...userInfo, [name]: value });
  };

  const registrationInfo = () => {
    fetch('http://10.58.5.66:3000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userInfo.email,
        password: userInfo.password,
      }),
    })
      // .then(res => res.json())
      .then(alert('good!'))
      .then(closeSignup)
      .catch(rej => alert(rej));
  };

  return (
    <div className="Signup" onClick={closeSignup}>
      <main className="signUpcontainer">
        <div className="signUpInputBox">
          <input
            name="email"
            className="userId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={getUserInfo}
          />
          <input
            name="password"
            className="password"
            type="password"
            placeholder="비밀번호"
            onChange={getUserInfo}
          />
          <button className="btn" onClick={registrationInfo}>
            회원가입
          </button>
          <button className="btn" onClick={onoffSignup}>
            취소
          </button>
        </div>
      </main>
    </div>
  );
};

export default Signup;
