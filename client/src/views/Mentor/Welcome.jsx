import './welcome.css'
import React from 'react'
import { Link } from 'react-router-dom'

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
      <Link className="btn-welcom-mentor" to="/FormMentor"> Siguiente</Link>
    </div>
  )
}

export default Welcome
