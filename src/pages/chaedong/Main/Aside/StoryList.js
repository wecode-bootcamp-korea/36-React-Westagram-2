function StoryList({ userId, userDescription, profileImg }) {
  return (
    <div className="asideNav">
      <img src={profileImg} alt="userProfileImg" />
      <div className="asideUserInfo">
        <p className="userId">{userId}</p>
        <p className="userDescription">{userDescription}</p>
      </div>
    </div>
  );
}

export default StoryList;
