import profil from "../images/profil.png"
import group from "../images/Group.svg"

export default function Tweets(){
return (
    <Tweet />
)
}
function Tweet(){
    return(
        <>
        <Profil />
        <Tweet_title_author />
        <Tweet_title_details />
        <Tweet_text />
        </>
        
    )
}
function Profil (){
    return(
        <img src={profil} />
    )
}
function Tweet_title_author(){
    return(
        <h2 tweet-title-author>CNN</h2>
    )
}
function Tweet_title_details(){
    return(
        <div className="tweet">
           <img src={group} /><span className="tweet-title-details">@CNN . 7m</span>        
        </div>
    )
}
function Tweet_text(){
    return(
        <p className="tweet-text">
        President Joe biden touted a new agreement reached with the European Union to ease Trump-era tariffd on aluminium
    </p>
    )
}

