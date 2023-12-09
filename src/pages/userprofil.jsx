import Tweets from "../components/tweets.jsx"
import couverture from "../images/fleuve.jpg"
import bidens from "../images/bidens.jpg"


function UserProfil(){
    return(
        <div className="profil-container">
                <HeaderProfil src={couverture} />
                <Tweets />            
        </div>
    )
}

function HeaderProfil(props){
    return(
        <div className="container-image">
            <img id="couverture_image" src={props.src} />
            <div className="child-container">
                <img id="profil_image" src={bidens} />
            </div>
        </div>
    )
}

export  {UserProfil, HeaderProfil}