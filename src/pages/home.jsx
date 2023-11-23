import React from 'react';
import Header from '../components/Header';
import Tweet_Editor from '../components/tweet';

function Home() {
  return (
    <main className="timeline">
      <Header />
      <Tweet_Editor />
    </main>
  );
}

export default Home;