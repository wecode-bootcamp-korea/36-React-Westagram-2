import React, { useState } from 'react';
import { image } from '../func';

import './Comment.scss';

const Comment = ({ comments: { comment, userName }, deleteComment }) => {
  const [isLike, setIsLike] = useState(false);

  const changeHeart = () => {
    setIsLike(!isLike);
  };

  return (
    <div className="comment">
      <div className="commentHead">
        <span className="commentNickname"> {userName} </span>
        <span>{comment}</span>
      </div>
      <div className="commentsIcon">
        <img
          src={isLike ? image('likeHeart') : image('heart')}
          alt="heartImg"
          onClick={changeHeart}
        />
        <img src={image('deleteImg')} alt="deleteImg" onClick={deleteComment} />
      </div>
    </div>
  );
};

export default Comment;
