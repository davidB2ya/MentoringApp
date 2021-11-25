import React, { useEffect, useState } from 'react'
import SchedulledSession from '../../../components/schedulledSessionCard/schedulledSessionCard'
import Styles from './SessionsBoard.module.css'
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux'  

function SessionsBoard () {
  const idStudent = useSelector(state => state.auth.user.id)
  const [sessions, setSessions] = useState([])


  useEffect(() => {
    Axios({
      url: `http://localhost:3001/api/dashboard/assignedsession/${idStudent}`
    })
      .then(response => {
        setSessions(response.data)
        console.log(response.data);
      })
      .catch(error => {
        console.log(error)
      })
  }, [setSessions])

  //   console.log(sessions)
  // axios.get('http://localhost:3001/api/session')
  // .then(res => {
  //     const sessions = res.data;
  //     console.log(sessions)
  //   })
  function transformStringArray(){}
  return (
    <div>
      
      <div className={Styles.board}>
        {sessions.map(session => (
          <SchedulledSession
            numSession={session.numSession}
            sessionObjective={session.sessionObjective}
            key={session.id}
            id={session.id}
          ></SchedulledSession>
        ))}
      </div>
      
    </div>
  )
}

export default SessionsBoard
