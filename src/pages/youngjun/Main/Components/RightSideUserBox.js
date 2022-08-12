import React from 'react';

const RightSideUserBox = ({ user: { picture, userNickname, userName } }) => {
  return (
    <div className="userBox">
      <div className="user">
        <img src={picture} alt="userImg" />
        <div className="userInfo">
          <span className="userNickname"> {userNickname} </span>
          <span className="loginInfo"> {userName} </span>
        </div>
      </div>
    </div>
  );
};

export default RightSideUserBox;
