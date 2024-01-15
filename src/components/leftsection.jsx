import notification from "../images/Notifications.svg"
import notifone from "../images/notifone.svg"

function LeftSection(props){
    return(
       <div className="container_left">
            <div className="icone_left">
                <img className="photoTweet" src={props.img} alt={props.text} />
            </div>

            <div className="text_left">
                <h4 className="text-title">{props.id}</h4>
            </div>
       </div>
    )
}
function Notification(){
    return(
        <div class="container_left">
                <div className="container-notification">
                    <div>
                        <img className="photoTweet" src={notification} alt="icone notification" />
                    </div>
                    <div class="chiffre-notification">
                        <img src={notifone} alt="icone pour 1" />
                    </div>
                </div>
                
                <div className="text_left">
                    <h4 className="text-title">Notificatios</h4>
                </div>
        </div>
    )
}
export {LeftSection, Notification}