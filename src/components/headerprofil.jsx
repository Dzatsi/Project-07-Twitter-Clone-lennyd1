import { Link } from "react-router-dom"
import message from "../images/Messages.svg"
import more from "../images/More.svg"
import { ButtonFollow } from "../components/rightsection.jsx"

export default function HeaderProfil(props){
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
                    <img src={more} alt='logo more' />
                    <img src={message} alt='logo message' />
                    <ButtonFollow />
                </div>
            </div>
        </>
        
    )
}