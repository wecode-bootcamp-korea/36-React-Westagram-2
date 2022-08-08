import './Main.scss';

import Article from './Section/Article';
import Aside from './Aside/Aside';
import Nav from '../../../components/Nav/Nav';

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
