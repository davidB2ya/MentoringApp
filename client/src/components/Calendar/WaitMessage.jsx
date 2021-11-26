import React from 'react';
import './waitmessage.css'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const WaitMessage = () => {

  const idStudent = useSelector(state => state.auth.user.id)
  const navigate = useNavigate() 
  
  
        
     


    return (
        <div> 
            <div className="container">
              <div className="back">
                <div className="card">
                  <div className="box">
                    <div className="content">
                      <h3>¡Hemos recibido tus respuestas!</h3>
                      <p>espera a que tu mentor asigne el rango de fechas en las que tiene disponibilidad para tu sesión</p>
                      
                    </div>              
                  </div>
                  {/* <h1 className="little">.hola.</h1> */}
                </div>
              </div>  
            </div>
        </div>
    )
}

export default WaitMessage
