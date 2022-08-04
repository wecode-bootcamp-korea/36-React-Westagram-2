import { useState } from 'react';
import './Nav.scss';

function Nav() {
  const [hasValue, setHasValue] = useState(false);
  const handleInputChange = e => setHasValue(!!e.target.value);

  return (
    <nav className="mainNav">
      <h3 className="navLogo">
        <img src="/images/instagram-logo.png" alt="westagramLogo" /> | westagram
      </h3>
      <div className="navInput">
        {hasValue ? null : (
          <span className="searchGlass">
            <img src="/images/magnifier.png" alt="magnifier" />
          </span>
        )}
        <input onChange={handleInputChange} type="text" placeholder="검색" />
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
