import { useEffect, useState } from 'react';
import Comment from './Comment';
import './Article.scss';

function Article({
  userId,
  profileImg,
  feedContents,
  feedImg,
  commentsListProps,
}) {
  const [loggedInUserId] = useState('chaedong');
  const [commentsList, setCommentsList] = useState([]);
  const [commentContent, setCommentContent] = useState('');

  const inputComment = e => setCommentContent(e.target.value);
  const submitComment = e => {
    e.preventDefault();
    if (commentContent === '') {
      return;
    }
    setCommentsList([...commentsList, commentContent]);
    setCommentContent('');
  };

  useEffect(() => {
    setCommentsList([...commentsListProps]);
  }, []);

  return (
    <article className="article">
      <div className="articleNav">
        <div className="articleNavUserInfo userId">
          <img src={profileImg} alt="userProfileImg" />
          <span>{userId}</span>
        </div>
        <div className="articleNavSeeMore">
          <i className="fa-solid fa-ellipsis" />
        </div>
      </div>
      <div className="articleImg">
        <img src={feedImg} alt="articleImg" />
      </div>
      <div className="articleImojis">
        <div>
          <i className="fas fa-heart fa-lg colorRed" />
          <i className="far fa-comment fa-lg" />
          <i className="fas fa-upload fa-lg" />
        </div>
        <div>
          <i className="far fa-bookmark fa-lg" />
        </div>
      </div>
      <div className="articleLiked">{feedContents}</div>
      <div className="articleLiked">
        <span className="userId">asdf</span>
        <span className="content"> 님 외 10명이 좋아합니다.</span>
      </div>
      <div className="articleComments">
        {commentsList.map(
          (comment, id) =>
            (comment = (
              <Comment userId={loggedInUserId} contents={comment} key={id} />
            ))
        )}
        <div className="articleCommentTime">
          <span>42분 전...</span>
        </div>
      </div>
      <form onSubmit={submitComment} className="articleInputComment">
        <input
          onInput={inputComment}
          value={commentContent}
          type="text"
          placeholder="댓글 달기..."
        />
        <button type="submit">게시</button>
      </form>
    </article>
  );
}

export default Article;
