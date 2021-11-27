import '../Mentor/welcomeMentor.css'
import React, { useState, useEffect, useSelector} from "react";
import axios from 'axios'




const WelcomeMentor= () => {
  const auth = useSelector(state => state.auth.user.role)
  
  const [mentor, setMentor] = useState(false)

  useEffect (() => {
  axios({
    url: `/welcome-mentor/`,
  })
  .then((response) => {
    setMentor(response.data);

    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
}, [mentor]);



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

export default WelcomeMentor
