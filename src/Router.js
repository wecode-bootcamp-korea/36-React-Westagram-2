import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginYoungjun from './pages/youngjun/Login/Login';
import MainYoungjun from './pages/youngjun/Main/Main';

import LoginChaedong from './pages/chaedong/Login/Login';
import MainChaedong from './pages/chaedong/Main/Main';

import LoginSeulki from './pages/seulki/Login/Login';
import MainSeulki from './pages/seulki/Main/Main';

import Entry from './pages/Entry';
import Nav from './components/Nav/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/login-youngjun" element={<LoginYoungjun />} />
        <Route
          path="/main-youngjun"
          element={
            <>
              <Nav />
              <MainYoungjun />
            </>
          }
        />
        <Route path="/login-chaedong" element={<LoginChaedong />} />
        <Route
          path="/main-chaedong"
          element={
            <>
              <Nav />
              <MainChaedong />
            </>
          }
        />
        <Route path="/login-seulki" element={<LoginSeulki />} />
        <Route
          path="/main-seulki"
          element={
            <>
              <Nav />
              <MainSeulki />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
