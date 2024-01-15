import React, { useState } from "react"

export default function IconLike({counts}) {
    const [icon, setIcon] = useState(false)
    const [count, setCount] = useState(counts)
    
    const handleClick = () =>{
        if(!icon){
            setCount(count -1)
        }else{
            setCount(count +1)
        }
        return setIcon(!icon)
    }
        
      return (
        <div className="tweet-action icone-like" title="like">
            <div className={`svg-like ${icon ? 'svg-likes' : ''}`} onClick={()=> handleClick()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="red"  width="15" height="20" viewBox="0 0 25 30" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="arcs">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C16.09 3.81 17.76 3 19.5 3 22.58 3 25 5.42 25 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
            </div>
            {/* <img onClick={()=>{changeIcon(), handleClick()}} src={`${icon ? like : liked}`} /> */}
            <span id="datails-likes">{count}</span>
        </div>
      )
    }