import React from 'react';
import Feed from './Components/Feed';
import { image } from './func';

import './Main.scss';

const Main = () => {
  return (
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
              <span>Selp_0100 beHind</span>
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
                <span className="loginInfo"> 이름 </span>
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
                <span className="loginInfo">이름</span>
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
  );
};

export default Main;
