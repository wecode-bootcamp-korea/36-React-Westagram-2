import React, { useEffect, useState } from 'react';
import Feed from './Components/Feed';
import Footer from './Components/Footer';
import { image } from './func';

import './Main.scss';

const Main = () => {
  const [feeds, setFeeds] = useState([]);
  useEffect(() => {
    fetch('/data/FeedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        return setFeeds(data);
      });
  }, []);

  return (
    <main className="main">
      <section className="centerFrame">
        {feeds.map((content, i) => {
          return (
            <Feed
              key={i}
              id={content.id}
              userName={content.userName}
              picture={content.picture}
              feedComment={content.feedComment}
              createdAt={content.createdAt}
            />
          );
        })}
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
        <Footer />
      </aside>
    </main>
  );
};

export default Main;
