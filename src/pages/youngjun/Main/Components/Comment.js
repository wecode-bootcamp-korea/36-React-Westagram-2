import React, { useState } from 'react';

import './Comment.scss';

const Comment = ({ comment }) => {
  const image = FileName => {
    return process.env.PUBLIC_URL + '/images/youngjun/' + FileName + '.png';
  };

  const [heart, setHeartImg] = useState(image('heart'));

  const changeHeart = () => {
    heart === image('heart')
      ? setHeartImg(image('heart_1'))
      : setHeartImg(image('heart'));
  };

  return (
    <div className="comment">
      <div className="commentHead">
        <span className="commentNickname"> 닉네임 </span>
        <span>{comment}</span>
      </div>
      <div className="commentsIcon">
        <img
          className="heartImg"
          src={heart}
          alt="heartImg"
          onClick={changeHeart}
        />
        <img className="deleteImg" src={image('deleteImg')} alt="deleteImg" />
      </div>
    </div>
  );
};

export default Comment;
