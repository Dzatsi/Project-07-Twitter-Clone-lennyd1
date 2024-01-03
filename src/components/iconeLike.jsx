import React, { useState } from "react"
import like from "../images/Like.svg"
import liked from "../images/Liked.svg"


export default function IconLike({counts}) {

    const [icon, setIcon] = useState(true)
    const [count, setCount] = useState(counts)
    
    const changeIcon =() =>{
        setIcon(!icon)
    }
    
    const handleClick = () =>{
        if(!icon){
            setCount(count -1)
        }else{
            setCount(count +1)
        }
    }
    
    const divStyles = {
        color: !icon ? 'red' : ' ',
    }
    
      return (
        <div className="tweet-action-button-react" title="like">
            <img onClick={()=>{changeIcon(), handleClick()}} src={`${icon ? like : liked}`} />
            <span style={divStyles}>{count}</span>
        </div>
      )
    }