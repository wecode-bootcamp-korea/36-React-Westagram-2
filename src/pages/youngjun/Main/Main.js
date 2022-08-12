import React, { useEffect, useState } from 'react';
import Feed from './Components/Feed';
import RightSide from './Components/RightSide';

import './Main.scss';

const Main = () => {
  const [feeds, setFeeds] = useState([]);
  useEffect(() => {
    fetch('/data/FeedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        return setFeeds(data);
      });
  }, []);

  return (
    <main className="main">
      <section className="centerFrame">
        {feeds.map(feed => (
          <Feed key={feed.id} content={feed} />
        ))}
      </section>

      <RightSide />
    </main>
  );
};

export default Main;
