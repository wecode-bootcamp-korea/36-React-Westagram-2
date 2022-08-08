import './Aside.scss';
import StoryList from './StoryList';
import { STORY_LIST } from '../../uiData';

function Aside() {
  return (
    <aside className="aside">
      <div className="asideNav">
        <img
          src="/images/chaedong/profile-wecode-desk.jpg"
          alt="userProfileImg"
        />
        <div className="asideUserInfo">
          <p className="userId">chaedong</p>
          <p className="userDescription">chaedong | 위코드</p>
        </div>
      </div>
      <div className="asideBox storyBox">
        <div className="storyNav">
          <div className="storyNavLeft">
            <p>스토리</p>
          </div>
          <div className="storyNavRight">
            <p>모두 보기</p>
          </div>
        </div>
        <div className="storyBoxes">
          {STORY_LIST.map(userList => {
            return (
              <StoryList
                key={userList.id}
                userId={userList.userId}
                userDescription={userList.userDescription}
                profileImg={userList.profileImg}
              />
            );
          })}
        </div>
      </div>
      <div className="asideBox">
        <div className="storyNav">
          <div className="storyNavLeft">
            <p>회원님을 위한 추천</p>
          </div>
          <div className="storyNavRight">
            <p>모두 보기</p>
          </div>
        </div>
        <div className="storyBoxes">
          <div className="asideNav">
            <img
              src="/images/chaedong/profile-wecode-desk.jpg"
              alt="userProfileImg"
            />
            <div className="asideUserInfo">
              <p className="userId">chaedong</p>
              <p className="userDescription">chaedong | 위코드</p>
            </div>
            <p className="followButton">팔로우</p>
          </div>
          <div className="asideNav">
            <img
              src="/images/chaedong/profile-wecode-desk.jpg"
              alt="userProfileImg"
            />
            <div className="asideUserInfo">
              <p className="userId">chaedong</p>
              <p className="userDescription">chaedong | 위코드</p>
            </div>
            <p className="followButton">팔로우</p>
          </div>
          <div className="asideNav">
            <img
              src="/images/chaedong/profile-wecode-desk.jpg"
              alt="userProfileImg"
            />
            <div className="asideUserInfo">
              <p className="userId">chaedong</p>
              <p className="userDescription">chaedong | 위코드</p>
            </div>
            <p className="followButton">팔로우</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
