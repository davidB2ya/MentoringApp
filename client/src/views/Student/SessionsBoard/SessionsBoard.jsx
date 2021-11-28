import React, { useEffect, useState } from 'react'
<<<<<<< HEAD
import SchedulledSession from '../../../components/schedulledSessionCard/SchedulledSessionCard'
import Styles from './SessionsBoard.module.css'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from 'react-redux'
import WaitMessage from '../../../components/Calendar/WaitMessage';

=======
import SchedulledSession from '../../../components/schedulledSessionCard/schedulledSessionCard'
import Styles from './sessionsBoard.module.css'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux'  
import NavRes from '../../../components/NavRes/NavRes';
>>>>>>> parent of efa8e75 (sidebar)
function SessionsBoard () {
  // const idStudent = useSelector(state => state.auth.user.id)
  const [sessions, setSessions] = useState([])
<<<<<<< HEAD
  const [sessionsExist, setSessionsExist] = useState(false)
  const studentProgram = useSelector(state => state.auth.user.program)
  // const { user }= auth

  useEffect(
    sessionsExist => {
      //  const studentProgram = user.program
      Axios.get(`http://localhost:3001/api/session/${studentProgram}`).then(
        res => {
          const sessionsResult = res.data
          //  console.log(sessionsResult)
          setSessions(sessionsResult)
          if (sessionsResult.length > 0) {
            //  console.log("esta entrando al if")
            // setSessions (sessionsResult)
            setSessionsExist(!sessionsExist)
          } else {
            setSessionsExist(sessionsExist)
          }
        }
      )
    },
    [studentProgram]
=======
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
>>>>>>> parent of efa8e75 (sidebar)
  )

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
      <>
        <WaitMessage header={"¡Muy pronto podras ver las sesiones habilitadas!"} message={"Espera a que las sesiones sean habilitadas"}></WaitMessage>
      </>
    )
  }

  return <>{sessionsExist ? <SessionExist /> : <SessionNotExists />}</>
}

export default SessionsBoard
