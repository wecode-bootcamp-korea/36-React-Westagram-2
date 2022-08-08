import React, { useState } from 'react';
import './Signup.scss';

const Signup = ({ onoffSignup }) => {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const closeSignup = e => {
    if (e.target === e.currentTarget) {
      onoffSignup();
    }
  };

  const saveUserId = e => {
    setUserId(e.target.value);
  };

  const saveUserPassword = e => {
    setUserPassword(e.target.value);
  };

  // useEffect(() => {
  //   fetch('https://westagram-signup.herokuapp.com/signup', {
  //     id: userId,
  //     password: userPassword,
  //   })
  //     .then(res => res.json())
  //     .catch(res => {
  //       console.log('fail');
  //     });
  // }, []);

  return (
    <div className="backgroudSignup" onClick={closeSignup}>
      <main className="signUpcontainer">
        <div className="signUpInputBox">
          <input
            className="userId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
            value={userId}
          />
          <input
            className="password"
            type="password"
            placeholder="비밀번호"
            onChange={saveUserPassword}
            value={userPassword}
          />
          <button className="btn" onClick={() => alert('미구현')}>
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
