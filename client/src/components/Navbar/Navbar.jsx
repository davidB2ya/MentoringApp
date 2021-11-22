import React from 'react';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import Image from '../assets/images/programate-solo-color.png';
import '../Navbar/Navbar.css';

const Navbar = () => {

    const auth = useSelector(state => state.auth)

    const {user, isLogged} = auth

    const handleLogout = async () => {
        try {
            // await axios.get('/user/logout')
            localStorage.removeItem('firstLogin')
            localStorage.removeItem('loggedAgoraUser')
            localStorage.removeItem('isLogged')
            window.location.href = "/";
        } catch (err) {
            window.location.href = "/";
        }
    }

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


        <div style={{width: "100px", height: "100px", backgroundColor: "red"}}>
            <Link to='/' onClick={handleLogout}> 
                logout
            </Link> 
        </div>
        </>

    
    );
}

export default Navbar;
