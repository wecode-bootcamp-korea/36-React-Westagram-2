import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import LoginYoungjun from './pages/youngjun/Login/Login';
import MainYoungjun from './pages/youngjun/Main/Main';

import LoginChaedong from './pages/chaedong/Login/Login';
import MainChaedong from './pages/chaedong/Main/Main';

import LoginSeulki from './pages/seulki/Login/Login';
import MainSeulki from './pages/seulki/Main/Main';

import Nav from './components/Nav/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login-youngjun" element={<LoginYoungjun />} />
        <Route path="/main-youngjun" element={<MainYoungjun />} />
        <Route path="/login-chaedong" element={<LoginChaedong />} />
        <Route path="/main-chaedong" element={<MainChaedong />} />
        <Route path="/login-seulki" element={<LoginSeulki />} />
        <Route path="/main-seulki" element={<MainSeulki />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
