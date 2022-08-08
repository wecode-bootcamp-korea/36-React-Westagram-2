import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import { image } from '../func';
import RightSideUserBox from './RightSideUserBox';

const RightSide = () => {
  const [user, setUSer] = useState([]);
  useEffect(() => {
    fetch('/data/UserData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        return setUSer(data);
      });
  }, []);

  return (
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
        {user.map((user, i) => {
          return (
            <RightSideUserBox
              key={i}
              picture={user.picture}
              userNickname={user.userNickname}
              userName={user.userName}
            />
          );
        })}
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
  );
};

export default RightSide;
