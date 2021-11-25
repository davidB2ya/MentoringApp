import '../Calendar/calendar.module.css'
import React from 'react'
import {useSelector} from 'react-redux'



const Calendar = () => {
  const [equipo, setEquipo] = React.useState([])

  React.useEffect(() => {
    //console.log('useEffect')
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    const data = await fetch('http://localhost:5001/api/mentor-availability/618d78f66d3cf89d7abfe0cd')
    const Users = await data.json()
    console.log(Users)
    setEquipo(Users)
  }

  return (
    <div className='calendar'>
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

        <div className='hour-of-begin'>
          <h4>Hora de inicio</h4>
          <p>17:30</p>
        </div>
        <div className='hour of-end'>
          <h4>Hora de finalizacion</h4>
          <p>18:30</p>
        </div>
      </div>
      <div>
        <select className='select-date' value='seleccione una fecha'>
          {equipo.map(item => (
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