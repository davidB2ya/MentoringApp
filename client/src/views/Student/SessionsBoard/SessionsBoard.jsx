import React, { useEffect, useState } from 'react'
import SchedulledSession from '../../../components/schedulledSessionCard/schedulledSessionCard'
import Styles from './sessionsBoard.module.css'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux'  
import NavRes from '../../../components/NavRes/NavRes';
function SessionsBoard () {
  const [sessions, setSessions] = useState([])
  const auth = useSelector(state => state.auth)
  const { user }= auth

   useEffect(() => {
   const studentProgram = user.program
  axios.get(`http://localhost:3001/api/session/${studentProgram}`)
   .then(res => {
       const sessionsResult = res.data;
      setSessions (sessionsResult)
     })
  }, [auth])
    console.log(sessions)
  
  return (
    <div>
      <NavRes/>
      <div className={Styles.board}>
        {sessions.map(session => (
          <SchedulledSession
            numSession={session.numSession}
            startDate={session.startDate}
            key={session.id}
            id={session.id}
            endDate={session.endDate}
          ></SchedulledSession>
        ))}
      </div>
      
    </div>
  )
}

export default SessionsBoard
