import '../Calendar/calendar.modules.css'
import 'react-datepicker/dist/react-datepicker.css'
import React from 'react'



const Calendar = () => {
  const [fechas, setFechas] = React.useEffect()
 
      React.useEffect(() => {
        console.log('useEffect')
      })
 
    return (
      <div className='calendar'>
        <h3>Querido estudiante</h3>
        <p>
          Debes escoger el dìa de tu sesión de mentoría dentro del siguiente
          rango de fechas que tu mentor ha programado.
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
            
              <option >
                
              </option>
            
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
