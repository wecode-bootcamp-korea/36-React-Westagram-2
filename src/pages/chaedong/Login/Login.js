import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();

  const goToMain = () => navigate('/main');
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const isValidId = userId => userId.search(/@/g) !== -1;
  const isValidPassword = userPassword => userPassword.length >= 5;
  const isValidInputs = (userId, userPassword) =>
    isValidId(userId) && isValidPassword(userPassword);

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
            onChange={e => setUserId(e.target.value)}
            className="inputId"
            type="email"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={e => setUserPassword(e.target.value)}
            className="inputPassword"
            type="password"
            minLength="5"
            placeholder="비밀번호"
          />
          <button
            className={
              isValidInputs(userId, userPassword)
                ? 'enabledButton'
                : 'disabledButton'
            }
            type="submit"
            disabled={isValidInputs(userId, userPassword) ? false : true}
          >
            로그인
          </button>
        </form>
        <div className="findPassword">
          <a href="#">비밀번호를 잊으셨나요?</a>
          <div>
            <Link to="/signup">Signup으로 이동</Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
