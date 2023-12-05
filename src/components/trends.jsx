import reglage from "../images/reglage.png"
import searchIcon from "../images/Searchicon.png"
import more from "../images/MoreB.svg"


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
                <RightSection textitlesix="trending in Turqkey" textitlefiv="#SQUID" next="2,066 Tweets" img={more} />
            </div>    
        </div>
    )
}
function RightSection(props){
    return(
        <div className="first-section-rigth" >
            <div>
                <p className="text_details">{props.textitlesix} </p>
                <h5 className="" >{props.textitlefiv}</h5>
                <p>{props.next} </p>
            </div>
            <div>
                <img className="photoTweet" src={props.img} />
            </div>
        </div>
    )
}

export default Trends;