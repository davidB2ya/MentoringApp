import React from 'react';
import '../Thanks/thanks.css'

const Thanks = () => {
    return (
        <div> 
            <div className="container">
              <div className="back">
                <div className="card">
                  <div className="box">
                    <div className="content">
                      <h3>¡Hemos recibido tus respuestas!</h3>
                      <p>Te notificaremos por correo cuándo se haya realizado la asignación de tu mentor.</p>
                      
                    </div>              
                  </div>
                  {/* <h1 className="little">.hola.</h1> */}
                </div>
              </div>  
            </div>
        </div>
    )
}

export default Thanks
