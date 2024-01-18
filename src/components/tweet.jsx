import React from 'react'
import data from "./data.jsx"
import certifier from "../images/Group.svg"
import downlord from "../images/Downlord.svg"
import IconLike from "./iconeLike.jsx"
import IconeComment from "./iconeComment.jsx"
import Iconeretweet from "./iconeRetweet.jsx"

export default function Tweet(){
    return (
       <>
            {
                data.map( tweet =>{
                    return(
                        <div className="tweet" key={tweet.id}>
                            <div>
                                <img src={tweet.profil} alt="profil" />
                            </div>

                            <div className="tweet-content">
                                <div className="tweet-title">
                                    <h2 className="tweet-title-author">{tweet.title} </h2>
                                    <img src={tweet.certification} alt="certification" />
                                    <span className="tweet-title-details">{tweet.details} </span>
                                </div>
                                <div>
                                    <p className="tweet-text ">{tweet.text} </p>
                                </div>
                                    <img className="tweet-image" src={tweet.imageTweet} alt="" /> 
                                <div className="tweet-actions ">
                                    <IconeComment details={tweet.comments} />
                                    <Iconeretweet details={tweet.retweet} />
                                    <IconLike details={tweet.like} />
                                    <div className="tweet-action" title="send"><img src={downlord} /></div>
                                </div>
                            </div>
                        </div>
                    )
                    
                })                          
            }                   
       </>
            
            )
}

function Certification(){
    return(
        <img id="certification" src={certifier} alt="logo certification" />
    )
}

export {Certification}





