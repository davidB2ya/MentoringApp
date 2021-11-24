import React, { useEffect, useState } from 'react'
import SchedulledSession from '../../../components/schedulledSessionCard/schedulledSessionCard'
import Styles from './SessionsBoard.module.css'
import Axios from "axios";
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function SessionsBoard () {
  const [sessions, setSessions] = useState([])

//   useEffect(() => {
//     axios.get('http://localhost:3001/api/session').then(res => {
//       const sessionsGet = res.data
//       setSessions(sessionsGet)
//     })
//   })

  useEffect(() => {
    Axios({
      url: 'http://localhost:3001/api/session'
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
