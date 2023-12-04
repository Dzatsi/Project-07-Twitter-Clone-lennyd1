import menuB from "../images/homeB.png";

function LeftSection(){
    return(
       <div className="container_left">
            <div className="icone_left">
                <img className="photoTweet" src={menuB} alt="icone home" />
            </div>

            <div className="text_left">
                <h4>Home</h4>
            </div>
       </div>
    )
}
export default LeftSection;