import React from 'react';
import Header from '../components/Header';
import Tweet_Editor from '../components/tweetEditor';
import Tweets from '../components/tweets';

function Home() {
  return (
    <main className="timeline">
      <Header />
      <Tweet_Editor />
      <Tweets />
    </main>
  );
}

export default Home;