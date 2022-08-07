import React, { useState } from 'react';
import NewComment from './NewComment';
import './Feed.scss';

const Feed = () => {
  const [comment, setComment] = useState('');
  const [arr, setArr] = useState([]);
  const savedComment = e => {
    setComment(e.target.value);
  };
  const buttonStatus = comment => {
    return comment.length > 0;
  };

  const addCommnet = e => {
    e.preventDefault();
    setArr([...arr, comment]);
    setComment('');
  };

  return (
    <div className="article_wrapper">
      <div className="article_top">
        <div className="article_left">
          <img
            className="feed_profile_pic"
            alt="cat_profile_pic"
            src="https://images.unsplash.com/photo-1598589290625-9b04630ec5d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0JTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          />
          <button className="writer_id">imacutecat</button>
        </div>
        <div className="article_right" />
      </div>
      <img
        className="article_pic"
        alt="cat_fell_asleep_on_the_laptop"
        src="https://images.unsplash.com/photo-1634838080334-28befa9efe80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0JTIwY29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
      />
      <div className="article_middle_icon_wrapper">
        <div className="article_icons">
          <img
            className="icon_background"
            alt="like"
            src="images/seulki/heart.png"
            width={25}
            height={25}
          />
          <img
            className="icon_background"
            alt="comments"
            src="images/seulki/chat.png"
            width={30}
            height={30}
          />
          <img
            className="icon_background"
            alt="share"
            src="images/seulki/send.png"
            width={25}
            height={25}
          />
        </div>
        <div className="main_feed_icons_save">
          <img
            className="save_icon"
            alt="save"
            src="images/seulki/save.png"
            width={23}
            height={25}
          />
        </div>
      </div>
      <div className="liked_users_wrapper">
        <img
          className="liked_user_img"
          alt="hamster_user"
          src="https://images.unsplash.com/photo-1452721226468-f95fb66ebf83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80>"
          width={18}
        />
        <span className="liked_user_info">
          <button>
            <span className="bold">happy_hamster</span>
          </button>
          님
          <button>
            <span className="bold">외 300명</span>
          </button>
          이 좋아합니다
        </span>
      </div>
      <div>
        <div>
          <button className="article_comments">
            <span className="bold">imacutecat</span>
          </button>
          <span className="article_comments_span">
            오늘도 코딩하다 잠들어버렸😪...
          </span>
          <button className="color_grey">더 보기</button>
        </div>
        <div className="article_comments_flex_div">
          <div>
            <button className="article_comments">
              <span className="bold">woof.09</span>
            </button>
            <span className="article_comments_span">그만자 제발🤨</span>
          </div>
          <button className="comment_like_btn">
            <img
              className="comment_like_mini_btn icon_background"
              alt="like_button"
              src="images/seulki/heart_no_colour.png"
            />
          </button>
        </div>
        <p className="article_comments color_grey">3시간 전</p>
      </div>
      <div className="inputted_new_comment_overflow_js">
        <NewComment arr={arr} />
      </div>
      <form className="post_parent">
        <input
          className="input_comments"
          type="text"
          placeholder="댓글 달기..."
          value={comment}
          onChange={savedComment}
        />
        <button
          className={buttonStatus(comment) ? 'post_button_on' : 'post_button'}
          disabled={buttonStatus(comment) ? false : true}
          onClick={addCommnet}
        >
          게시
        </button>
      </form>
    </div>
  );
};

export default Feed;
