import './Nav.scss';

function Nav() {
  return (
    <nav className="mainNav">
      <h3 className="navLogo">
        <img src="/images/instagram-oogo.png" alt="westagramLogo" /> | westagram
      </h3>
      <div className="navInput">
        <span>
          <i className="fas fa-search" /> &nbsp;&nbsp;검색
        </span>
        <input type="text" />
      </div>
      <div className="navIcons">
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          alt="exploreImg"
        />
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          alt="likeImg"
        />
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          alt="profileImg"
        />
      </div>
    </nav>
  );
}

export default Nav;
