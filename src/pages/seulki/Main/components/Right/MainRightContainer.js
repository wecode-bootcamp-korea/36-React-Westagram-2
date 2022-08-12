import React from 'react';
import Copywriter from './Copywriter';
import './MainRightContainer.scss';

const MainRightContainer = () => {
  return (
    <div className="main_right_container">
      <div className="side_feed_top">
        <img
          className="userProfilePic"
          alt="surfing_profile_pic"
          src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VyZmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        />
        <div className="background_grey">
          <div className="background_grey">
            <button className="userId_bio">
              <span className="background_grey bold">surfing_bootcamp</span>
            </button>
          </div>
          <span className="userId_bio color_grey">
            Surfing world | 서핑월드
          </span>
        </div>
      </div>
      <div className="story_wrapper">
        <div className="story_top">
          <span className="story_font color_grey">스토리</span>
          <button className="seeAll_right_button">모두보기</button>
        </div>
        <div className="story_overflow">
          <div className="friendsInfo_wrapper">
            <img
              className="gotStory_profile_pic feed_profile_pic"
              alt="friends_profile_pic"
              src="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFiYml0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            />
            <div className="friendsStoryInfo">
              <button className="friendsId">
                <span className="bold">kind.rabbit</span>
              </button>
              <span className="lastUpdated color_grey">1분 전</span>
            </div>
          </div>
          <div className="friendsInfo_wrapper">
            <img
              className="gotStory_profile_pic feed_profile_pic"
              alt="friends_profile_pic"
              src="https://images.unsplash.com/photo-1553264701-d138db4fd5d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8JTA4YW5ncnklMjBiaXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            />
            <div className="friendsStoryInfo">
              <button className="friendsId">
                <span className="bold">angry_bird</span>
              </button>
              <span className="lastUpdated color_grey">5분 전</span>
            </div>
          </div>
          <div className="friendsInfo_wrapper">
            <img
              className="gotStory_profile_pic feed_profile_pic"
              alt="friends_profile_pic"
              src="https://images.unsplash.com/photo-1585468274952-66591eb14165?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            />
            <div className="friendsStoryInfo">
              <button className="friendsId">
                <span className="bold">mylion</span>
              </button>
              <span className="lastUpdated color_grey">30분 전</span>
            </div>
          </div>
          <div className="friendsInfo_wrapper">
            <img
              className="gotStory_profile_pic feed_profile_pic"
              alt="friends_profile_pic"
              src="https://images.unsplash.com/photo-1612639797482-0ca1f21bdeb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2VhJTIwbGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            />
            <div className="friendsStoryInfo">
              <button className="friendsId">
                <span className="bold">swimmmer</span>
              </button>
              <span className="lastUpdated color_grey">1시간 전</span>
            </div>
          </div>
        </div>
      </div>
      <div className="recommendation_wrapper">
        <div className="recommendation_top">
          <span className="recommendation_font color_grey">
            회원님을 위한 추천
          </span>
          <button className="seeAll_right_button">모두보기</button>
        </div>
        <div className="recommendation_frame">
          <div className="friendsInfo_wrapper">
            <img
              className="feed_profile_pic"
              alt="friends_profile_pic"
              src="https://images.unsplash.com/photo-1575699914911-0027c7b95fb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2FuZ2Fyb298ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            />
            <div className="friendsStoryInfo">
              <button className="friendsId">
                <span className="bold">kangaroooo</span>
              </button>
              <span className="lastUpdated color_grey">
                swimmer님 외 3명이 kangaroooo님과 친구입니다.
              </span>
            </div>
          </div>
          <button className="follow_button">팔로우</button>
        </div>
        <div className="recommendation_frame">
          <div className="friendsInfo_wrapper">
            <img
              className="feed_profile_pic"
              alt="friends_profile_pic"
              src="https://images.unsplash.com/photo-1485735662814-c4f66e49dbae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8JTA4Z2lyYWZmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            />
            <div className="friendsStoryInfo">
              <button className="friendsId">
                <span className="bold">giraffeee</span>
              </button>
              <span className="lastUpdated color_grey">
                angry_bird님 외 1명이 giraffeee님과 친구입니다.
              </span>
            </div>
          </div>
          <button className="follow_button">팔로우</button>
        </div>
        <div className="recommendation_frame">
          <div className="friendsInfo_wrapper">
            <img
              className="feed_profile_pic"
              alt="friends_profile_pic"
              src="https://images.unsplash.com/photo-1499842340257-55ccb7a02645?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlwcG98ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            />
            <div className="friendsStoryInfo">
              <button className="friendsId">
                <span className="bold">hippoisdabest</span>
              </button>
              <span className="lastUpdated color_grey">
                mylion님 외 17명이 hippoisdabest님과 친구입니다.
              </span>
            </div>
          </div>
          <button className="follow_button">팔로우</button>
        </div>
      </div>
      <Copywriter />
    </div>
  );
};

export default MainRightContainer;
