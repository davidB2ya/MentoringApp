import React from 'react';
import Footer from '../../../components/Footer/Footer.jsx';
import Navbar from '../../../components/Navbar/Navbar.jsx';
// import '../Welcome/WelcomeStudent.css';
import WelcomeCard from '../../../components/welcomeCard/WelcomeCard.jsx';


const WelcomeStudent = () => {
    return (
        <div>
          <Navbar/>
          <WelcomeCard/>
          <Footer/>
        </div>
    )
}

export default WelcomeStudent
