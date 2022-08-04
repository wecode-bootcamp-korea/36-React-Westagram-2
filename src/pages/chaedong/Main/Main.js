import './Main.scss';

import Article from './Section/Article';
import Aside from './Aside';

function Main() {
  return (
    <div className="main">
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
