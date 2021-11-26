import '../Calendar/card-calendar.css'
import React, { useState, useEffect} from "react";
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Calendar = () => {
  
  const [time, setTime] = useState([])

  const idStudent = useSelector(state => state.auth.user.id)
  // console.log(idStudent)

  useEffect(() => {
    //console.log('useEffect')
    Asigndate()
  }, [])

  let { id } = useParams();
  // console.log(id)

  const Asigndate = async () => {

    const dateMent = await axios.get('http://localhost:3001/api/mentor-availability/',{
      idUser: idStudent,
      idSession: id
    })
    console.log(dateMent.data)
  }

  return (
    <div className='container-card'>
      <h3>Querido estudiante</h3>
      <p>
        Debes escoger el dìa de tu sesión de mentoría dentro del siguiente rango
        de fechas que tu mentor ha programado.
      </p>
      <h3>Rango de fechas para tu sesión</h3>
      <div className='dates-calendar'>
        <div className='date-begin'>
          <h4>Fecha inicial</h4>
          <p>10-Noviembre /2021</p>
        </div>

        <div className='date-end'>
          <h4>Fecha final</h4>
          <p>21-Noviembre /2021</p>
        </div>

        
      </div>
      <div className="container-select-D">
        <select className='select-date' placeholder='seleccione una fecha'>
          {time.map(item => (
            <option key='item.id'>
              {item.name} - {item.email}
            </option>
          ))} 
        </select>

        <input
          className='btn-selct-date'
          type='button'
          value='seleccione fecha'
        />
      </div>
    </div>
  )
}


export default Calendar