import React from 'react';
import img from "../images/timlines.svg";

function Header (props) {
    return (
        <header className="header">
            <h1 className="page-title">{props.ressource} </h1>
            <Icone />
        </header>        
    )
}

function Icone (){
    return (
        <img className="top-tweets" src={img} alt='logo for popular tweet' />
    )
}
export default Header; 