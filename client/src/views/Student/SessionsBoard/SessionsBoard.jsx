import React, { useEffect, useState } from 'react'
import SchedulledSession from '../../../components/schedulledSessionCard/schedulledSessionCard'
import Styles from './sessionsBoard.module.css'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux'  

function SessionsBoard () {
  const [sessions, setSessions] = useState([])
  const [sessionsExist, setSessionsExist] = useState(false)
  const studentProgram = useSelector(state => state.auth.user.program)
  // const { user }= auth

   useEffect((sessionsExist) => {
    //  const studentProgram = user.program
     axios.get(`http://localhost:3001/api/session/${studentProgram}`)
     .then(res => {
       const sessionsResult = res.data;
      //  console.log(sessionsResult)
       setSessions (sessionsResult)
       if(sessionsResult.length > 0){
            //  console.log("esta entrando al if")
            // setSessions (sessionsResult)
          setSessionsExist(!sessionsExist)
        }else{
          setSessionsExist(sessionsExist)
        }
       
      
      })

  }, [studentProgram])
  

  // function checkSessions (){
  //   if(sessions.length > 0){
  //     //  console.log("esta entrando al if")
  //     // setSessions (sessionsResult)
  //     setSessionsExist(!sessionsExist)
  //    }else{
  //     setSessionsExist(sessionsExist)
  //    }
  // }

  // checkSessions

  const SessionExist = () => {
    return (
      <div>
        
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

  const SessionNotExists = () => {
    return (
      <p>no existe sesiones</p>
    )
  }
  
  
  return (
    <>
      
      {sessionsExist ? <SessionExist/> : <SessionNotExists/>}
      
    </>
  )
}

export default SessionsBoard
