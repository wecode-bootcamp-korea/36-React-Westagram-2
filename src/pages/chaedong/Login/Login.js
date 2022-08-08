import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const goToMain = () => navigate('/main-chaedong');
  const [userInfo, setUserInfo] = useState({ userId: '', userPassword: '' });
  const isValidId = userId => userId.search(/@/g) !== -1;
  const isValidPassword = userPassword => userPassword.length >= 5;
  const isValidInputs = ({ userId, userPassword }) =>
    isValidId(userId) && isValidPassword(userPassword);
  const handleInputId = e => {
    setUserInfo({ ...userInfo, userId: e.target.value });
  };
  const handleInputPassWord = e => {
    setUserInfo({ ...userInfo, userPassword: e.target.value });
  };

  return (
    <div className="login">
      <main className="loginContainer">
        <h1 className="loginTitle">Westagram</h1>
        <form
          onSubmit={() => goToMain()}
          className="loginForm"
          action="main.html"
        >
          <input
            onChange={handleInputId}
            className="inputId"
            type="email"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={handleInputPassWord}
            className="inputPassword"
            type="password"
            minLength="5"
            placeholder="비밀번호"
          />
          <button
            className={
              isValidInputs(userInfo) ? 'enabledButton' : 'disabledButton'
            }
            type="submit"
            disabled={isValidInputs(userInfo) ? false : true}
          >
            로그인
          </button>
        </form>
        <div className="findPassword">
          <Link to="/signup">비밀번호를 잊으셨나요?</Link>
        </div>
      </main>
    </div>
  );
}

export default Login;
