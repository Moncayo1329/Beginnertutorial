import React from 'react'; // Importante agregar esta línea para usar React
import logo from './logo.svg';
import './App.css';



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

function Footer() {

  return (
     
    <footer><small> @ 2021 All right reserved</small></footer>

    )
  } 

  function MainContent() {

    return (
       <div>
      <ol>

      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>has well over 100k starts on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
      
      
      
          </ol>
          </div>
      )
    }







function App() {
  return (
    
   <div>

<Header />

<MainContent />

<Footer />

    </div>
  );
}

export default App;
