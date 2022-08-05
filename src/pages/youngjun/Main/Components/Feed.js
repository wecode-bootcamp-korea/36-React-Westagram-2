import React, { useState } from 'react';
import { image } from '../func';
import Comment from './Comment';

import './Feed.scss';

const Feed = ({ picture }) => {
  const [heart, setHeartImg] = useState(image('heart'));
  const [commentList, setcommentList] = useState([]);
  const [commentValue, setCommentValue] = useState('');

  const changeHeart = () => {
    heart === image('heart')
      ? setHeartImg(image('heart_1'))
      : setHeartImg(image('heart'));
  };

  const onSubmit = e => {
    e.preventDefault();
    if (commentValue === '') {
      return;
    }
    setcommentList(commentValueList => [commentValue, ...commentValueList]);
    setCommentValue('');
  };

  const commentEvent = e => {
    setCommentValue(e.target.value);
  };

  return (
    <article className="feeds">
      <header className="feedHeader">
        <div className="userNickname">
          <img src={image('profile')} alt="userPicture" />
          <p> Selp_0100 beHind </p>
        </div>
        <img src={image('seeMore')} alt="seeMoreImg" />
      </header>

      <div className="feedPicture">
        <img className="pictures" src={picture} alt="feedImg" />
      </div>

      <div className="feedBody">
        <div className="feedIcons">
          <div className="feedIconsLeft">
            <img
              className="heartImg"
              src={heart}
              alt="heartImg"
              onClick={changeHeart}
            />
            <img src={image('chat')} alt="chatImg" />
            <img src={image('upload')} alt="uploadImg" />
          </div>
          <img src={image('bookMark')} alt="bookMarkImg" />
        </div>

        <div className="feedLike">
          <img src={image('profile')} alt="whosLikeImg" />
          <p>
            <span>닉네임</span>님 외 <span>1220명이</span> 좋아합니다.
          </p>
        </div>

        <div className="feedInfo">
          <span className="feedName"> 닉네임 </span>
          <span className="feedContent"> 피드내용 </span>
        </div>

        <div className="commentContent">
          {commentList
            .slice(0)
            .reverse()
            .map((comment, i) => {
              return <Comment key={i} comment={comment} />;
            })}
        </div>

        <p className="createdAt">2시간 전</p>
      </div>

      <form className="commentUpload">
        <input
          type="text"
          placeholder="댓글달기"
          onChange={commentEvent}
          value={commentValue}
        />

        <button onClick={onSubmit}>게시</button>
      </form>
    </article>
  );
};

export default Feed;
