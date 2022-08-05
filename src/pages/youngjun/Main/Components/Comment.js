import React, { useState } from 'react';
import { image } from '../func';

import './Comment.scss';

const Comment = ({ comment, i }) => {
  const [heart, setHeartImg] = useState(image('heart'));

  const changeHeart = () => {
    heart === image('heart')
      ? setHeartImg(image('heart_1'))
      : setHeartImg(image('heart'));
  };

  return (
    <div className="comment" key={i}>
      <div className="commentHead">
        <span className="commentNickname"> 닉네임 </span>
        <span>{comment}</span>
      </div>
      <div className="commentsIcon">
        <img src={heart} alt="heartImg" onClick={changeHeart} />
        <img src={image('deleteImg')} alt="deleteImg" />
      </div>
    </div>
  );
};

export default Comment;
