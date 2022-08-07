import React from 'react';
import './SingleComment.scss';

const SingleComment = ({ item }) => {
  return (
    <p className="newCommentWrapper">
      <span className="bold">surfing_bootcamp</span>{' '}
      <span className="comment">{item}</span>
      <br />
    </p>
  );
};

export default SingleComment;
