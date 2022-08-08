import './Aside.scss';
import StoryList from './StoryList';

const STORY_LIST = [
  {
    id: 1,
    userId: 'chaedong',
    userDescription: 'chaedong | 위코드',
    profileImg: '/images/chaedong/profile-wecode-desk.jpg',
  },
  {
    id: 2,
    userId: '피카츄',
    userDescription: '피카츄 | 위코드',
    profileImg:
      'https://mblogthumb-phinf.pstatic.net/20160817_259/retspe_14714118890125sC2j_PNG/%C7%C7%C4%AB%C3%F2_%281%29.png?type=w800',
  },
  {
    id: 3,
    userId: '라이츄',
    userDescription: '라이츄 | 위코드',
    profileImg:
      'https://contents.lotteon.com/itemimage/_v144501/LO/16/98/81/82/55/_1/69/88/18/25/6/LO1698818255_1698818256_1.png',
  },
  {
    id: 4,
    userId: '파이리',
    userDescription: '파이리 | 위코드',
    profileImg:
      'https://cdn.banggooso.com/assets/images/game96/result/INFP.png',
  },
  {
    id: 5,
    userId: '꼬부기',
    userDescription: '꼬부기 | 위코드',
    profileImg:
      'https://www.thinkfood.co.kr/news/photo/202206/94900_123805_957.jpg',
  },
];

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
