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
                <HeaderProfil src={couverture} profil={bidens} name="Lenny Dzatsi" details='@Leteta' />
            </div>
            <TextANdFollowers paragraph="President Joe Biden a new agreement reached with the European union to ease 
                Trume era tariffs on aluminum and steel as a 'major breakthough' that would service 
                to both strengthen the US" followers="158000 followers" following="132 followings" />   
            <Posts />
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
            <img id="couverture_image" src={props.src}  />
            
            <div className="child-container">
                <div>
                    <img id="profil_image" src={props.profil} />
                    <p className="alt-profil" >{props.name} </p>
                    <p className="alt-profil tweet-title-details">{props.details} </p>
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

function Posts(){
    return(
        <div className="post-tweets">
            <div className="post-tweet-container"><p className="post-tweet-paragraph tweet-title-details">Posts</p></div>
            <div className="post-tweet-container"><p className="post-tweet-paragraph tweet-title-details">Replies</p></div>
            <div className="post-tweet-container"><p className="post-tweet-paragraph tweet-title-details">Highlights</p></div>
            <div className="post-tweet-container"><p className="post-tweet-paragraph tweet-title-details">Media</p></div>
            <div className="post-tweet-container"><p className="post-tweet-paragraph tweet-title-details">Likes</p></div>
        </div>
    )
}

function TextANdFollowers(text){
    return(
        <div>
                <p className="profil-description">{text.paragraph} </p>
                <div className="follow-div">
                    <p className="tweet-title-details">{text.followers} </p>
                    <p className="tweet-title-details">{text.following} </p>
                </div>
            </div>
    )
}

export  {UserProfil, HeaderProfil, Posts, TextANdFollowers}