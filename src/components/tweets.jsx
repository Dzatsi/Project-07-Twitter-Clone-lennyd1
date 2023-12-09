import group from "../images/Group.svg"
import retweet from "../images/Retweet.svg"
import comment from "../images/comment.svg"
import downlord from "../images/Downlord.svg"
import like from "../images/Like.svg"

export default function Tweets(props){
    return (
    
        <div className="tweet">
            <div>
                <img  src={props.profil} />
            </div>
            <div className="tweet-content">
                <div className="tweet-title" >
                    <h2 tweet-title-author>{props.title} </h2>
                    <Certification /><span className="tweet-title-details">{props.detail} </span>        
                </div>    
                <div>
                    <p className="tweet-text ">
                        {props.children}   
                     </p>
                 </div>
                 <div className="tweet-image">
                    <img src={props.src} />
                 </div>
                 <div className="tweet-actions ">
                    <div className="tweet-action"><img src={comment} /><span>{props.details} </span></div>
                    <div className="tweet-action"><img src={retweet} /><span>{props.id} </span></div>
                    <div className="tweet-action"><img src={like} /><span>{props.content} </span></div>
                    <div className="tweet-action"><img src={downlord} /></div> 
                </div>
                 
            </div>
        </div>
            
            )
}

function Certification(){
    return(
        <img id="certification" src={group} alt="logo certification" />
    )
}

export {Certification}





