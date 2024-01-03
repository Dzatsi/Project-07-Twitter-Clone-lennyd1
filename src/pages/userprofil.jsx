import Tweets from "../components/tweets.jsx"
import couverture from "../images/fleuve.jpg"
import bidens from "../images/bidens.jpg"
import message from "../images/Messages.svg"
import more from "../images/More.svg"
import { ButtonFollow } from "../components/rightsection.jsx"
import feuille from "../images/feuille.png"
import profil from "../images/profil.png"
import image from "../images/image.svg"
import twitter from "../images/twitter.svg"


function UserProfil(){
    return(
        <div className="timeline">
            <div className="profil-container">
                <HeaderProfil src={couverture} />
            </div>
            <div>
                <p className="profil-description">President Joe Biden a new agreement reached with the European union to ease 
                Trume era tariffs <br/> on aluminum and steel as a 'major breakthough' that would service 
                to both strengthen the US</p>
                <div className="follow-div">
                    <p className="tweet-title-details">158000 followers</p>
                    <p className="tweet-title-details">132 followings</p>
                </div>
            </div>
            <div className="post-tweets">
                <div className="post-tweet-container"><p className="post-tweet-paragraph tweet-title-details">Posts</p></div>
                <div className="post-tweet-container"><p className="post-tweet-paragraph tweet-title-details">Replies</p></div>
                <div className="post-tweet-container"><p className="post-tweet-paragraph tweet-title-details">Highlights</p></div>
                <div className="post-tweet-container"><p className="post-tweet-paragraph tweet-title-details">Media</p></div>
                <div className="post-tweet-container"><p className="post-tweet-paragraph tweet-title-details">Likes</p></div>
            </div>
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
            <Tweets title ="Twitter" detail ="@Twitter . Oct 29" profil={twitter} details="6.8K" id="36.6K" content="367.1K" >
                <p>
                BIG NEWS lol jk still Twitter 
                </p>
            </Tweets>
            <Tweets title ="Twitter" detail ="@Twitter . Oct 4" profil={twitter} details="118.7K" id="785.4K" content="3.3M" >
                <p>
                Hello literally every one 
                </p>
            </Tweets>
            <Tweets title ="Twitter" detail ="@Twitter . Oct 4" profil={twitter} details="98K" id="74.6K" content="1.1M" >
                <p>
                Hello literally every one 
                </p>
            </Tweets>
        </div>
        
    )
}

function HeaderProfil(props){
    return(
        <>
            <div className="container-image">
                <img id="couverture_image" src={props.src} />
            </div>
            <div className="child-container">
                <div>
                    <img id="profil_image" src={bidens} />
                    <p className="alt-profil" >Lenny Dzatsi</p>
                    <p className="alt-profil tweet-title-details">@Leteta</p>
                </div>
                <div className="icone-userprofil">
                    <img src={more} alt='logo more' />
                    <img src={message} alt='logo message' />
                    <ButtonFollow />
                </div>
            </div>
        </>
        
    )
}

export  {UserProfil, HeaderProfil}