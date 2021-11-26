import '../Calendar/card-calendar.css'
import React, { useState, useEffect} from "react";
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Select from 'react-select'

const Calendar = () => {
  
  const [date, setDate] = useState([])
  const [avaiDates, setAvaiDates] = useState([])
  const [dateSelect, setDateSelect] = useState()

  const idStudent = useSelector(state => state.auth.user.id)
  // console.log(idStudent)

  let { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/api/mentor-availability/${id}/${idStudent}`).then((response) => {
      setDate(response.data)
      // console.log(response.data)
      if(response.data.length > 0){
        setAvaiDates(response.data[0].mentAvailability)
      }
      
    })
  }, [])

  console.log(date)

  const saveAvaiDates = []

  function saveDates (data) {

    data.forEach(date => saveAvaiDates.push({value: date, label: date}))

  }

  saveDates(avaiDates)

  // console.log(saveAvaiDates)



  const handleDateSelect = (dateSelect) => {
    setDateSelect(dateSelect.value)
  }

  console.log(dateSelect)
  

  const handleUpdateDate = () => {
    // axios
    // .post('http://localhost:3001/api/assignedDate',{
    //   "idSession": "6197ce26f88d38494783ab98",
    // "idStudent": "619b119ab7d52e9ae48a916e",
    // "idMentor": "6195814646ac4b76e0e660c5",
    // "dateAsig": "2020-08-27T04:00:00.000Z",
    // "link": "este es un usuario de prueba"
    // })
  }
   


  const MenAvailExist = (req, res) => {
    return(
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
          { date.map((Startdate, index) =>(<p key={index}>{Startdate.idSession.startDate}</p> ))}
        </div>

        <div className='date-end'>
          <h4>Fecha final</h4>
          { date.map((EndDate, index) =>(<p key={index}>{EndDate.idSession.endDate}</p> ))}
        </div>

        
      </div>
      <div className="container-select-D">
        <Select
          className="selectDates"
          name="Dates"
          options={saveAvaiDates}
          onChange={handleDateSelect}
        />
        <button  onClick={handleUpdateDate}>Finalizar</button>
      </div>
    </div>
    )
  }

  const NotMentAvail = () => {
    return (
      <p>espere a que su mentor asigne unas posibles fechas</p>
    )
  }

  return (
    <>
    {date.length > 0 ? <MenAvailExist/> : <NotMentAvail/>}
    </>
  )
}


export default Calendar