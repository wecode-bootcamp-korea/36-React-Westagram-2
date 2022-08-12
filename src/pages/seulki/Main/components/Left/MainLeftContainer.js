import React, { useState, useEffect } from 'react';
import Feed from './Feed';
import './MainLeftContainer.scss';

const MainLeftContainer = () => {
  const [feedList, setFeedList] = useState([]);
  useEffect(() => {
    fetch('/data/feed.json')
      .then(response => response.json())
      .then(result => setFeedList(result));
  });
  return (
    <div className="main_left_side_container">
      {feedList.map(info => {
        return (
          <Feed
            key={info.id}
            username={info.username}
            userImg={info.userImg}
            picture={info.picture}
            likedUser={info.likedUser}
            likedPeople={info.likedPeople}
            content={info.content}
            comment_id={info.comment_id}
            comment_={info.comment}
          />
        );
      })}
    </div>
  );
};

export default MainLeftContainer;
