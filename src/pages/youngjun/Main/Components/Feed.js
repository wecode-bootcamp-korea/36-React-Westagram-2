import React, { useState } from 'react';
import Comment from './Comment';
import { image } from '../func';

import './Feed.scss';

const Feed = ({ content: { picture, userName, feedComment, createdAt } }) => {
  // Review: 잘못된 state 활용, 최종 결과물이 아닌, 나타내고자 하는 값에 맞게
  const [heart, setHeartImg] = useState(image('heart'));
  // like? 
  const [isLike, setIsLike] = useState(false)

  const [commentList, setcommentList] = useState([]);
  const [commentValue, setCommentValue] = useState('');

  const changeHeart = () => {
    // isLike ? setIsLike(false) : setIsLike(true)
    setIsLike(!isLike)
    // condition ? true value : false value
  };

  const onSubmit = e => {
    e.preventDefault();
    // Review: {} 생략
    if (commentValue === '') return
    // Review: Math.random을 id로 사용하는 것 X
    const id = Math.random();
    const userName = '닉네임';
    const comment = commentValue;
    setcommentList([...commentList, { userName, comment, id }]);

    setCommentValue('');
  };

  const deleteComment = id => {
    // Review: return {} 생략
    setcommentList(
      commentList.filter(comment => {
        return comment.id !== id;
      })
    );
  };

  const commentEvent = e => {
    setCommentValue(e.target.value);
  };

  // const token = localStorage.getItem('token');

  // const checkInfo = () => {
  //   fetch(' https://westagram-signup.herokuapp.com/profile', {
  //     method: 'GET',
  //     headers: {
  //       Authorization: token,
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(res => alert(res))
  //     // .catch(rej => alert(rej));
  //     .catch(console.log(token));
  // };

  return (
    <article className="feeds">
      <header className="feedHeader">
        <div className="userNickname">
          <img src={image('profile')} alt="userPicture" />
          <p> {userName} </p>
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
              src={isLike ? "likeHeart.png" : "heart.png"}
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
          <span className="feedName"> {userName} </span>
          <span className="feedContent"> {feedComment} </span>
        </div>

        <div className="commentContent">
          {commentList.map((comments, i) => {
            return (
              <Comment
                key={i}
                comments={comments}
                deleteComment={() => deleteComment(comments.id)}
              />
            );
          })}
        </div>

        <p className="createdAt"> {createdAt} </p>
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
