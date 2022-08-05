import React from 'react';
import { useNavigate } from 'react-router-dom';
import { image } from './func';
import Feed from './Components/Feed';

import './Main.scss';

const Main = () => {
  const navigate = useNavigate();

  const loginRouter = () => {
    navigate('/login-youngjun');
  };

  return (
    <>
      <nav className="topBar">
        <div className="imgAndLogo">
          <img
            id="logoImg"
            src={image('instagram')}
            alt="logoImg"
            onClick={loginRouter}
          />
          <div className="line" />
          <div className="logo"> Westargram </div>
        </div>
        <div className="searchBar">
          <img src={image('search')} alt="searchImg" />
          <input className="searchInput" type="text" placeholder="검색" />
          <div className="modalOff">
            <div className="userBox">
              <div className="user">
                {/* <img src={deleteImg} alt="userImg" /> */}
                <div className="userInfo">
                  <p className="userNickname"> bboha1 </p>
                  <p className="info"> 노가다 </p>
                </div>
              </div>
            </div>
            <p className="line2" />
            <div className="userBox">
              <div className="user">
                {/* <img src={bookMarkImg} alt="userImg" /> */}
                <div className="userInfo">
                  <p className="userNickname"> he2_jung_ </p>
                  <p className="info"> 서미미 </p>
                </div>
              </div>
            </div>
            <p className="line2" />
            <div className="userBox">
              <div className="user">
                {/* <img src={userImg} alt="userImg" /> */}
                <div className="userInfo">
                  <p className="userNickname"> dawoon </p>
                  <p className="info"> 정다다 </p>
                </div>
              </div>
            </div>
            <p className="line2" />
            <div className="userBox">
              <div className="user">
                {/* <img src={searchImg} alt="userImg" /> */}
                <div className="userInfo">
                  <p className="userNickname"> j.wonseoook </p>
                  <p className="info"> 장와우 </p>
                </div>
              </div>
            </div>
            <p className="line2" />
            <div className="userBox">
              <div className="user">
                {/* <img src={profile_2Img} alt="userImg" /> */}
                <div className="userInfo">
                  <p className="userNickname"> tyler_sh.jung </p>
                  <p className="info"> 정타이 </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="iconCollect">
          <img src={image('compass')} alt="compassImg" />
          <img src={image('heart')} alt="emptyHeartImg" />
          <img className="userImg" src={image('user')} alt="userImg" />
          <div className="userModal hideModal">
            <div className="triangle box" />
            <div className="userSetting">
              <img src={image('user')} alt="userImg" />
              <p>프로필</p>
            </div>
            <div className="userSetting">
              <img src={image('bookMark')} alt="userImg" />
              <p>저장됨</p>
            </div>
            <div className="userSetting">
              <img src={image('vector')} alt="userImg" />
              <p>설정</p>
            </div>
            <div className="line2" />
            <p className="logout">로그아웃</p>
          </div>
        </div>
      </nav>
      <main className="main">
        <section className="centerFrame">
          <Feed picture={image('profile')} />
          <Feed picture={image('profile')} />
          <Feed picture={image('profile')} />
          <Feed picture={image('profile')} />
          <Feed picture={image('profile')} />
          <Feed picture={image('profile')} />
        </section>

        <aside className="side">
          <div className="loginUserInfoImg">
            <div className="user">
              <img src={image('profile')} alt="userImg" />
              <div className="userInfo">
                <span className="userNickname">Selp_0100 beHind</span>
                <span className="loginInfo">권영준</span>
              </div>
            </div>
          </div>

          <section className="suggestedList">
            <header className="suggestedListHeader">
              <span> 스토리 </span>
              <span> 모두보기 </span>
            </header>
            <div className="userBox">
              <div className="user">
                <img src={image('profile')} alt="userImg" />
                <div className="userInfo">
                  <span className="userNickname"> 닉네임 </span>
                  <span className="info"> 이름 </span>
                </div>
              </div>
            </div>
          </section>

          <section className="suggestedList">
            <header className="suggestedListHeader">
              <span> 회원님을 위한 추천 </span>
              <span> 모두보기 </span>
            </header>
            <div className="userBox">
              <div className="user">
                <img src={image('profile')} alt="userImg" />
                <div className="userInfo">
                  <span className="userNickname"> 닉네임 </span>
                  <span className="info">이름</span>
                </div>
              </div>
              <div className="follow">
                <span> 팔로우 </span>
              </div>
            </div>
          </section>

          <footer className="suggestedListFooter">
            Westagram 정보 . 지원 . 홍보 센터 . API . <br />
            채용정보 . 개인정보처리방침 . 약관 . <br />
            디렉터리 . 프로필 . 해시태그 . 언어 <br /> @ 2022 WESTAGRAM
          </footer>
        </aside>
      </main>
    </>
  );
};

export default Main;
