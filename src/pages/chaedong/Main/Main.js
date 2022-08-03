import './Main.scss';

import Article from './Section/Article';
import Aside from './Aside';
import Nav from './Nav';

function Main() {
  return (
    <div className="main">
      <Nav />
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
