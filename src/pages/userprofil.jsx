import Sidebar from "../components/sidebar.jsx"
import Trends from "../components/trends"
import Tweets from "../components/tweets.jsx"
import couverture from "../images/couvertureL.jpeg"
import bidens from "../images/bidens.jpg"


function UserProfil(){
    return(
        <div className="profil-container">
                <Sidebar />
                <HeaderProfil />
                <Tweets />            
                <Trends />
        </div>
    )
}

function HeaderProfil(){
    return(
        <div className="container-image">
            <img id="couverture_image" src={couverture} />
            <div className="child-container">
                <img id="profil_image" src={bidens} />
            </div>
        </div>
    )
}

export {UserProfil}