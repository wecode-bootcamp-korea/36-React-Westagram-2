import React from 'react';
import './Main.scss';
import Header from './components/Nav/Header';
import MainLeftContainer from './components/Left/MainLeftContainer';
import MainRightContainer from './components/Right/MainRightContainer';

function Main() {
  return (
    <div className="whole_page">
      <Header />
      <div className="main_container">
        <MainLeftContainer />
        <MainRightContainer />
      </div>
    </div>
  );
}

export default Main;
