import photo from "../images/tweetB.png"
import {LeftSection, Notification} from './leftsection';
import home from "../images/homeB.svg"
import explore from "../images/Explore.svg"
import message from "../images/Messages.svg"
import bookmark from "../images/Bookmarks.svg"
import list from "../images/Lists.svg"
import Profil from "../images/profilB.svg"
import more from "../images/More.svg"
import { Link } from "react-router-dom";
import profil from "../images/profil.png"
import avatar from "../images/profile.png"

function Sidebar(){
    return(
        <div className="sidebar">
            <div className="icone_left">
                <img className="photoTweet" src={photo} alt="logo tweet blanc" />
            </div>
             <Link to='/'><LeftSection img={home} txt="icone menu" id="Home" /></Link>   
            <LeftSection img={explore} txt="icone menu" id="Explore" />
            <Notification />
            <LeftSection img={message} txt="icone menu" id="Messages" />
            <LeftSection img={bookmark} txt="icone menu" id="Bookmarks" />
            <LeftSection img={list} txt="icone menu" id="Lists" />
            <Link to='/userprofil'><LeftSection img={Profil} txt="icone menu" id="Profile" /></Link> 
            <LeftSection img={more} txt="icone menu" id="More" />
            <div className="div_button_left">
                <button className="button_left">Tweet</button>
            </div>
            <div className="compte-id">
                <img src={avatar} alt="logo" />
                <div>
                    <h4>Bradly Ortiz</h4>
                    <p className="tweet-title-details">@Bradly</p>
                </div>
                
            </div>
            
        </div>
    )
}
export default Sidebar;