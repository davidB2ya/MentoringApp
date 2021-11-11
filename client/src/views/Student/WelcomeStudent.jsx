import React from 'react'

const WelcomeStudent = () => {
    return (
        <div>
             <div>
          <h1 className="barnav">BARNAV</h1>
            <div className="container">
              <div className="back">
                <div className="card">
                  
                  <div className="box">
                    <div className="content">
                      <h3>Querido/a estudiante</h3>
                      <ul className="list">
                          <li>Gracias por realizar la inscripción.</li>
                          <li>No olvides completar los 3 pasos para empezar tu proceso de mentoría.</li>
                          <li>Puedes contactar con tus formadores, si tienes alguna duda.</li>
                      </ul>
                      <a href="#" >Siguiente</a>
                    </div>              
                  </div>
                  {/* <h1 className="little">.hola.</h1> */}
                </div>
              </div>  
            
          </div>
          <h1 className="footer">FOOTER</h1>
        </div>
        </div>
    )
}

export default WelcomeStudent
