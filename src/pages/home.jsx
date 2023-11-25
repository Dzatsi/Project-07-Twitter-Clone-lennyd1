import React from 'react';
import Header from '../components/Header';
import Tweet_Editor from '../components/tweetEditor';
import Tweets from '../components/tweets';
import feuille from "../images/feuille.png"
import profil from "../images/profil.png"
import image from "../images/image.svg"

function Home() {
  return (
    <main className="timeline">
      <Header />
      <Tweet_Editor />
      <Tweets title ="CNN" detail ="@CNN . 7m" profil={profil} details="57" id="144" content="184" >
        <p>
          President Joe biden touted a new agreement reached with the European Union to ease Trump-era tariffd on aluminium 
          and steel as a 'major breakthrough' that would serv to both strengthen the US steel industry and combat the global climat crisis. 
        </p>
      </Tweets>
      <Tweets title ="The New York Times" detail ="@nymes. 2h" src={feuille} profil={image} details="19" id="48" content="482" >
        <p>
          Gardening boomed during the pandemic. Six Black writers share how has heped them re-establish, and reimagine, a connection to 
          cultivation and the land
        </p>
      </Tweets>
    </main>
  );
}

export default Home;