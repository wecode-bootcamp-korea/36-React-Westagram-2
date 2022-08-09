import './Main.scss';

import Article from './Section/Article';
import Aside from './Aside/Aside';
import Nav from '../../../components/Nav/Nav';

import { useEffect, useState } from 'react';

function Main() {
  const [feedList, setFeedList] = useState([]);
  // commentsList = [
  //   {id:1, comments: ["ㅇㅇ","ㄴㄴ"]},
  //   {id:2, comments: ["ㅇㅇ","ㄴㄴ"]},
  //   {id:3, comments: ["ㅇㅇ","ㄴㄴ"]}
  // ]
  //
  //
  //
  //
  //
  //
  //
  //

  useEffect(() => {
    fetch('/data/feedList.json')
      .then(res => res.json())
      .then(result => {
        setFeedList(result);
      });
  }, []);

  return (
    <div className="main">
      <Nav />
      <main>
        <section>
          {feedList.map(feed => {
            return (
              <Article
                key={feed.id}
                userId={feed.userId}
                profileImg={feed.profileImg}
                feedContents={feed.feedContents}
                feedImg={feed.feedImg}
                commentsListProps={feed.commentsList}
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
