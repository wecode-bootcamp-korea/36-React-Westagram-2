import './Main.scss';

import Article from './Section/Article';
import Aside from './Aside/Aside';
import Nav from '../../../components/Nav/Nav';

import { FEED_LIST } from '../uiData';

function Main() {
  return (
    <div className="main">
      <Nav />
      <main>
        <section>
          {FEED_LIST.map(feed => {
            return (
              <Article
                key={feed.id}
                userId={feed.userId}
                profileImg={feed.profileImg}
                feedContents={feed.feedContents}
                feedImg={feed.feedImg}
              />
            );
          })}
        </section>
        <Aside />
      </main>
    </div>
  );
}

export default Main;
