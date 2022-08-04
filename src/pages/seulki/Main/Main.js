import React from 'react';
import './Main.scss';
import Header from './components/Header';
import MainLeftContainer from './components/MainLeftContainer';
import MainRightContainer from './components/MainRightContainer';

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
