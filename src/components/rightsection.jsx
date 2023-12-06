
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
                        <p id="first">{props.text}</p>
                        <p className="text-detail">{props.detail}</p>
                    </div>
                </div>
                
                <div >
                    <button className="button-right">Follow</button>
                </div>
            </div>
    )
}

function PrintShowMore(){
    return(
        <h5 id="text-blue">Show more</h5>
    )
}
export {RightSection, PrintShowMore, SecondSectionRight}
