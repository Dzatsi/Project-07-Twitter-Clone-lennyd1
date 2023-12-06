import {RightSection, PrintShowMore, SecondSectionRight} from "./rightsection"
import reglage from "../images/reglage.png"
import searchIcon from "../images/SearchIcon.png"
import more from "../images/MoreB.svg"
import image from "../images/profil.png"
import twitter from "../images/twitter.svg"
import lenny from "../images/dzatsi.jpeg"


function Trends(){
    return(
        <div className="right-sidebar">
            <div className="search">
                <div>
                    <img src={searchIcon} />
                </div>
                <div>
                    <input className="input" type="text" placeholder="Search Tweet" />
                </div>
            </div>
            <div className="div-components-right" >
                <div className="first-section-rigth" >
                    <div>
                        <h5 className="text-title" >Trends for you</h5>
                    </div>
                    <div>
                        <img className="photoTweet" src={reglage} />
                    </div>
                </div>
                <RightSection textitlesix="Trending in Turqkey" textitlefiv="#SQUID" next="2,066 Tweets" img={more} />
                <RightSection textitlesix="Trending in Turqkey" textitlefiv="#SQUID" next="2,066 Tweets" img={more} />
                <RightSection textitlesix="Trending in Turqkey" textitlefiv="#SQUID" next="2,066 Tweets" img={more} />
                <RightSection textitlesix="Trending in Turqkey" textitlefiv="#SQUID" next="2,066 Tweets" img={more} />
                <PrintShowMore />
            </div>  
            <div className="div-components-right">
                <h3 id="title-second-section">Who to follow</h3>
                <SecondSectionRight src={image} text="CNN" detail="@CNN" />
                <SecondSectionRight src={lenny} text="Lenny Dzatsi" detail="@leteta" />
                <SecondSectionRight src={twitter} text="Twitter" detail="@twitter" />
                <PrintShowMore />
            </div>  
        </div>
        
    )
}



export default Trends;