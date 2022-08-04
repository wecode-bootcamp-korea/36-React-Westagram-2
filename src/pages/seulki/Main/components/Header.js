import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="nav_bar_container">
      <div className="nav_left_side_logo_wrapper">
        <img
          alt="westagram_logo"
          src="images/seulki/instagram.png"
          width={25}
        />
        <img alt="westagram_line" src="images/seulki/line.png" width={28} />
        <span className="logo_font logo">
          <Link to="/" className="logo_link logo_font logo">
            Westagram
          </Link>
        </span>
      </div>
      <div className="nav_center_search_wrapper">
        <input className="nav_search" type="text" placeholder="검색" />
        <img
          className="search_img"
          alt="magnifying_glass"
          src="images/seulki/search.png"
          width={28}
        />
      </div>
      <div className="nav_right_side_icons_wrapper">
        <img
          alt="navigation_icon"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          width={27}
        />
        <img
          alt="heart_icon"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          width={27}
        />
        <img
          alt="myPage_icon"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          width={27}
        />
      </div>
    </header>
  );
}

export default Header;
