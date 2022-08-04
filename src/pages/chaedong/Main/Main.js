import './Main.scss';

import Article from './Section/Article';
import Aside from './Aside';
import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <div className="main">
      <Outlet />
      <main>
        <section>
          <Article />
          <Article />
          <Article />
          <Article />
        </section>
        <Aside />
      </main>
    </div>
  );
}

export default Main;
