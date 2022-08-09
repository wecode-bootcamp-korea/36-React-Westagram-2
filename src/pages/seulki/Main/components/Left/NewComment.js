import React from 'react';
import SingleComment from './SingleComment.js';

const NewComment = ({ arr }) => {
  return (
    <p>
      {arr.map((item, index) => (
        <SingleComment item={item} key={index} />
      ))}
    </p>
  );
};

export default NewComment;
