import './welcome.css'
import React from 'react'

const Welcome= () => {
  return (
    <div className='Welcome'>
      <h2>Estimado Mentor(a)</h2>
      <ul>
        <li>Gracias por realizar la inscripción</li>

        <li> No olvides completar los 3 pasos para tu perfil como Mentor</li>
        <li>
          contactar con el equipo administrativo de educamás si tienes alguna
          duda.
        </li>
      </ul>
      <button>Siguiente</button>
    </div>
  )
}

export default Welcome
