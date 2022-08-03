import { useState } from 'react';

function Comment({ userId, contents }) {
  const [liked, setLiked] = useState(false);
  const likedClassList = 'likeBtn fa-lg fa-heart fas colorRed';
  const nonLikedClassList = 'likeBtn fa-lg fa-heart fa-regular';
  return (
    <div className="articleComment">
      <div>
        <span className="userId">{userId}</span>
        <span className="content">{contents}</span>
      </div>
      <i
        onClick={() => setLiked(!liked)}
        className={liked ? likedClassList : nonLikedClassList}
      />
    </div>
  );
}

export default Comment;
