function StoryList({ userId, userDescription, profileImg, followBtn }) {
  return (
    <div className="asideNav">
      <img src={profileImg} alt="userProfileImg" />
      <div className="asideUserInfo">
        <p className="userId">{userId}</p>
        <p className="userDescription">{userDescription}</p>
      </div>
      {followBtn && <p className="followButton">팔로우</p>}
    </div>
  );
}

export default StoryList;
