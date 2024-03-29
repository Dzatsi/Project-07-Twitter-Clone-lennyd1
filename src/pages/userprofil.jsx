import Tweets from "../components/tweet.jsx"
import cover from "../images/fleuve.jpg"
import bidens from "../images/bidens.jpg"
import Header from "../components/header.jsx"


function UserProfil(){
    return(
        <div className="timeline">
            <Header ressource="Profil" />
            <div className="profil-container">
                <Coverage src={cover} profil={bidens} name="Lenny Dzatsi" details='@Leteta' />
            </div>
            <TextANdFollowers paragraph="President Joe Biden a new agreement reached with the European union to ease 
                Trume era tariffs on aluminum and steel as a 'major breakthough' that would service 
                to both strengthen the US" followers="158000 followers" following="132 followings" />   
            <Posts />
            <Tweets />
        </div> 
    )
}

function Coverage(props){
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
                    <button className="edit-profil-btn">Edit Profil</button>
                </div>
            </div>
        </>
        
    )
}

function Posts(){
    return(
        <div className="post-tweets">
            <div className="post-tweet-container" id="posts"><p className="post-tweet-paragraph tweet-title-details">Posts</p></div>
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

export  {UserProfil, Posts, TextANdFollowers}