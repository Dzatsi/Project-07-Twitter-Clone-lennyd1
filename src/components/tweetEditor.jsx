import profil from "../images/profile.png";
import poll from "../images/Poll.svg"
import gif from "../images/Gif.svg"
import schedule from "../images/Schedule.svg"
import media from "../images/Media.svg"
import emoji from "../images/Emoji.svg"


function Tweet_Editor (){
    return (
        <section className="tweet-editor">
        <Avatar />
        <Tweet_editor_form />
        </section>
        
    )
}
function Avatar (){
    return (
            <img className="avatar" src={profil} />
    )
}

function Tweet_editor_form (){
    return (
        <div className="tweet-editor-form">
            <Editor_input />
            <Tweet_editor_bttons />
        </div>       
    )
}
function Editor_input (){
        return(
            <form>
             <input className="tweet-editor-input" type="text" name="texte"  placeholder="What's happening" />
            </form>   
        )
}

function Tweet_editor_bttons (){
    return (
        <section className="tweet-editor-buttons">
            <Tweet_editor_actions />
            <Button />  
        </section>
    )
}
function Button(){
    return (
        <button className="button">Tweet</button>
    )
}
function Tweet_editor_actions (){
    return(
        <div className="tweet-editor-actions">
            <img src={media} />
            <img src={gif} />
            <img src={poll} />
            <img src={emoji} />
            <img src={schedule} />
        </div>
    )
}


 export default Tweet_Editor;