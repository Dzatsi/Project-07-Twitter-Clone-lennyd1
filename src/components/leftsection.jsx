

function LeftSection(props){
    return(
       <div className="container_left">
            <div className="icone_left">
                <img className="photoTweet" src={props.img} alt={props.text} />
            </div>

            <div className="text_left">
                <h4 className="page-title">{props.id}</h4>
            </div>
       </div>
    )
}
export default LeftSection