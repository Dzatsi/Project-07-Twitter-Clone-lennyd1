import {TextANdFollowers, Posts} from "./userprofil"
import HeaderProfil from "../components/headerprofil.jsx"
import couverture from "../images/cnn.jpeg"
import Tweets from "../components/tweets.jsx"
import logo from "../images/profil.png"
import Header from "../components/header.jsx"

export default function UserName (){
    return(
        <div className="timeline">
            <Header ressource="Profil" />
            <div className="profil-container">
                <HeaderProfil src={couverture} name="CNN" details='@CNN' profil={logo} />
                <TextANdFollowers paragraph="It’s our job to #GoThere & tell the most difficult stories. For breaking news, follow 
                    @CNNBRK and download our app http://cnn.com/apps" followers="62M followers" following="1,085 followings" />
                <Posts />
                <Tweets />
            </div>
        </div>
    )
}