import photo from "../images/tweetB.png"
import {LeftSection, Notification} from './leftsection';
import home from "../images/homeB.svg"
import explore from "../images/Explore.svg"
import message from "../images/Messages.svg"
import bookmark from "../images/Bookmarks.svg"
import list from "../images/Lists.svg"
import profil from "../images/profilB.svg"
import more from "../images/More.svg"


function Sidebar(){
    return(
        <div className="sidebar">
            <div className="icone_left">
                <img className="photoTweet" src={photo} alt="logo tweet blanc" />
            </div>
            <LeftSection img={home} txt="icone menu" id="Home" />
            <LeftSection img={explore} txt="icone menu" id="Explore" />
            <Notification />
            <LeftSection img={message} txt="icone menu" id="Messages" />
            <LeftSection img={bookmark} txt="icone menu" id="Bookmarks" />
            <LeftSection img={list} txt="icone menu" id="Lists" />
            <LeftSection img={profil} txt="icone menu" id="Profile" />
            <LeftSection img={more} txt="icone menu" id="More" />
            <div className="div_button_left">
                <button className="button_left">Tweet</button>
            </div>
            
        </div>
    )
}
export default Sidebar;