import React from "react";
import logo from './logo.svg';



function Header (){
    return (
    
      <header>
    
    <nav> 
    <img src={logo} className="nav-logo" alt="Logo" />
          <h1>Fun facts about React</h1>
         
        <h3>React Project 1</h3>
        
          
           </nav>
    </header>
    )
    }

    export default Header;