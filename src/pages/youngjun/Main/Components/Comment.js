import React, { useState } from 'react';
import { image } from '../func';

import './Comment.scss';

const Comment = ({ comment, i, userName, deleteComment }) => {
  const [heart, setHeartImg] = useState(image('heart'));

  const changeHeart = () => {
    heart === image('heart')
      ? setHeartImg(image('likeHeart'))
      : setHeartImg(image('heart'));
  };

  return (
    <div className="comment" key={i}>
      <div className="commentHead">
        <span className="commentNickname"> {userName} </span>
        <span>{comment}</span>
      </div>
      <div className="commentsIcon">
        <img src={heart} alt="heartImg" onClick={changeHeart} />
        <img src={image('deleteImg')} alt="deleteImg" onClick={deleteComment} />
      </div>
    </div>
  );
};

export default Comment;
