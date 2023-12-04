import photo from "../images/tweetB.png"
import LeftSection from './leftsection';
import home from "../images/homeB.png"


function Sidebar(){
    return(
        <div className="sidebar">
            <div className="icone_left">
                <img className="photoTweet" src={photo} alt="logo tweet blanc" />
            </div>
            <LeftSection img={home} txt="icone menu" id="Home" />
            <LeftSection img={home} txt="icone menu" id="Explore" />
            <LeftSection img={home} txt="icone menu" id="Notifications" />
            <LeftSection img={home} txt="icone menu" id="Messages" />
            <LeftSection img={home} txt="icone menu" id="Bookmarks" />
            <LeftSection img={home} txt="icone menu" id="Lists" />
            <LeftSection img={home} txt="icone menu" id="Profile" />
            <LeftSection img={home} txt="icone menu" id="More" />
            <div className="div_button_left">
                <button className="button_left">Tweet</button>
            </div>
            
        </div>
    )
}
export default Sidebar;