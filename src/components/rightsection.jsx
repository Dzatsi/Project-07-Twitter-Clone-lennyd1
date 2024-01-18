import React, { useState } from "react"
import { Certification } from "./tweet"

function RightSection(props){
    return(
        <div className="first-section-rigth" >
            <div>
                <p className="text_details">{props.textitlesix} </p>
                <h5>{props.textitlefiv}</h5>
                <p className="text_details">{props.next} </p>
            </div>
            <div>
                <img className="photoTweet" src={props.img} />
            </div>
        </div>
    )
}

function SecondSectionRight(props){
    
    return(
            <div className="second-section-right">
                <div id="composant">
                    <div className="image">
                        <img className="image" src={props.src} alt="logo tweet" />
                    </div>
                    <div className="text">
                        <div>
                            <p id="first">{props.text}</p>
                            <p className="text-detail">{props.detail}</p>
                        </div>
                        <Certification />
                    </div>
                    
                </div>
                
                <div >
                    <ButtonFollow />
                </div>
            </div>
    )
}

function ButtonFollow(){
    const[Follow, setFollow] = useState('Follow');

    const handleClick = () => {
        if(Follow === 'Follow'){
            setFollow('Unfollow');
        }else{
            setFollow('Follow');
        }
        
    }
    return(
        <button onClick={handleClick} className="button-right">{Follow }</button>
    )
}

function PrintShowMore(){
    return(
        <h5 id="text-blue">Show more</h5>
    )
}
export {RightSection, PrintShowMore, SecondSectionRight, ButtonFollow}

