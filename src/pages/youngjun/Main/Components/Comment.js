import React, { useState } from 'react';

import './Comment.scss';

const Comment = props => {
  const image = FileName => {
    return process.env.PUBLIC_URL + '/images/youngjun/' + FileName;
  };

  const [heart, setHeartImg] = useState(image('heart.png'));

  const changeHeart = () => {
    heart === image('heart.png')
      ? setHeartImg(image('heart_1.png'))
      : setHeartImg(image('heart.png'));
  };

  return (
    <div className="comment">
      <div className="commentHead">
        <span className="commentNickname"> 닉네임 </span>
        <span>{props.comment}</span>
      </div>
      <div className="commentsIcon">
        <img
          className="heartImg"
          src={heart}
          alt="heartImg"
          onClick={changeHeart}
        />
        <img
          className="deleteImg"
          src={image('deleteImg.png')}
          alt="deleteImg"
        />
      </div>
    </div>
  );
};

export default Comment;
