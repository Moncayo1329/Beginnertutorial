import React from "react";
import logo from './logo.svg';



function Header (){
    return (
    
      <header>
    
    <nav className="Nav"> 
    <img src={logo} className="nav-logo" alt="Logo" />
          <h1>Fun facts about React</h1>
          <ul className="Nav-Items">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
    
    
          </ul>
          
           </nav>
    </header>
    )
    }

    export default Header;