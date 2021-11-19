import React from 'react';
import Image from '../assets/images/programate-solo-color.png';
import '../Navbar/Navbar.css';
const Navbar = () => {
    return (
        <>
        <nav className= "main-nav">
          <div className="Img">
              <img src={Image} width="120px" height="30px"/>
              
        </div>
        </nav>
        <h1>Sesiones</h1>
        <br>
        </br>
        </>

    
    );
}

export default Navbar;
