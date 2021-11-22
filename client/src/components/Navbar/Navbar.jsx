import React from 'react';
import Image from '../assets/images/programate-solo-color.png';
import '../Navbar/Navbar.css';

const Navbar = () => {
    return (
        <>
        <nav className= "main-nav">
          <div className="Img">
              <img src={Image} width="120px" height="25px" alt="Logo Educamás" />
        </div>
        </nav>
        <h1>Sesiones</h1>
        <br>
        </br>


        <div style={{width: "100px", height: "100px", backgroundColor: "red"}}> logout </div>
        </>

    
    );
}

export default Navbar;
