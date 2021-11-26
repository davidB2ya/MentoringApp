import React, { useEffect, useState } from 'react'
import AssignmentCard from '../../../components/schedulledSessionCard/AssignmentCard'
import Styles from './sessionsBoard.module.css'
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
        // console.log(response.data);
      })
      .catch(error => {
        console.log(error)
      })
  }, [setSessions])

    console.log(sessions)
  
  
  return (
    <div>
      
      <div className={Styles.board}>
        {sessions.map(session => (
          <AssignmentCard
            numSession={session.idSession.numSession}
            dateAsig={session.dateAsig}
            link={session.link}
            key={session.id}
            id={session.idSession.id}
          ></AssignmentCard>
        ))}
      </div>
      
    </div>
  )
}

export default SessionsBoard
