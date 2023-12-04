import photo from "../images/tweetB.png"
import LeftSection from './leftsection';

function Sidebar(){
    return(
        <div className="sidebar">
            <div className="icone_left">
                <img className="photoTweet" src={photo} alt="logo tweet blanc" />
            </div>
            <LeftSection />
            
        </div>
    )
}
export default Sidebar;