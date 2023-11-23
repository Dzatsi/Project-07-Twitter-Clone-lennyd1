import React from 'react';
import img from "../images/timlines.svg";

function Header () {
    return (
        <header className="header">
            <Home />           
            <Icone />
        </header>        
    )
}
function Home (){
    return(
        <h1 className="page-title">Home</h1>
    );
}
function Icone (){
    return (
        <img className="top-tweets" src={img} alt='logo for popular tweet' />
    )
}
export default Header; 