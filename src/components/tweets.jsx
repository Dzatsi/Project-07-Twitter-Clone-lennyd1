import React, { useState } from "react"
import group from "../images/Group.svg"
import retweet from "../images/Retweet.svg"
import comment from "../images/comment.svg"
import downlord from "../images/Downlord.svg"
import IconLike from "./iconeLike"
import data from "./data"



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
                    <div className="tweet-action" title="comment"><img src={comment} /><span id="details-comments">{props.details} </span></div>
                    <div className="tweet-action" title="retweet"><img src={retweet} /><span id="details-retweets">{props.id} </span></div>
                    <IconLike counts={data.like} key={data.id} />
                    <div className="tweet-action" title="send"><img src={downlord} /></div> 
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





