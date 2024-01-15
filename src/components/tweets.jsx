import { Link } from "react-router-dom"
import React, { useState } from "react"
import group from "../images/Group.svg"
import downlord from "../images/Downlord.svg"
import IconLike from "./iconeLike"
import data from "./data"
import IconeComment from "./iconeComment"
import Iconeretweet from "./iconeRetweet"



export default function Tweets(props){
    return (
        <div className="tweet">
            <div>
                <Link to='/username'><img  src={props.profil} /></Link>
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
                    <IconeComment details={data.comments} />
                    <Iconeretweet details={data.retweet} />
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





