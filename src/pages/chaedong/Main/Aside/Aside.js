import './Aside.scss';
import StoryList from './StoryList';
import { STORY_LIST, ASIDE_MENU_LIST } from '../../uiData';

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
                followBtn={false}
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
          {STORY_LIST.map(userList => {
            if (userList.userId !== 'chaedong') {
              return (
                <StoryList
                  key={userList.id}
                  userId={userList.userId}
                  userDescription={userList.userDescription}
                  profileImg={userList.profileImg}
                  followBtn={true}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
      <div className="asideNav">
        <ul>
          {ASIDE_MENU_LIST.map((menu, idx) => {
            return (
              <span key={idx} className="userDescription">
                {menu}&nbsp;
                {idx !== ASIDE_MENU_LIST.length - 1 && '·'}&nbsp;
              </span>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
