import React from 'react';
import Nav from '/Users/suzie/Desktop/wecode/team-project/36-React-Westagram-2/src/components/Nav/Nav.js';
import MainLeftContainer from './components/Left/MainLeftContainer';
import MainRightContainer from './components/Right/MainRightContainer';
import './Main.scss';

function Main() {
  return (
    <div className="whole_page">
      <Nav />
      <div className="main_container">
        <MainLeftContainer />
        <MainRightContainer />
      </div>
    </div>
  );
}

export default Main;
