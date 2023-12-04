import reglage from "../images/reglage.png"

function Trends(){
    return(
        <div className="right-sidebar">
            <div>
                <input className="input" type="text" />
            </div>
            <div className="div-components-right" >
                <RightSection img={reglage} text="Trends for you" />
                <RightSection img={reglage} text="Trends for you" />
                <RightSection img={reglage} text="Trends for you" />
                <RightSection img={reglage} text="Trends for you" />
                <RightSection img={reglage} text="Trends for you" />
                <RightSection img={reglage} text="Trends for you" />
            </div>    
        </div>
    )
}
function RightSection(props){
    return(
        <div className="first-section-rigth" >
            <div>
                <h5 >{props.text}</h5>
            </div>
            <div>
                <img className="photoTweet" src={props.img} />
            </div>
        </div>
    )
}

export default Trends;