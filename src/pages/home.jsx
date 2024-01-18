import React from 'react'; 
import Header from '../components/header.jsx';
import Tweet_Editor from '../components/tweetEditor';
import Tweets from '../components/tweet.jsx';


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