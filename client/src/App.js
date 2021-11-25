import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'

import {
  dispatchGetUser,
  dispatchLogin,
  fetchUser
} from './redux/actions/authActions'

// import Styles from'./index.module.css'
// import { render } from 'react-dom';
import {
  // BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

// login
import Login from './components/login/Login.jsx'
import NotFound from './views/General/NotFound'
import ForgotPassword from './components/login/ForgotPassword.jsx'

//others
import WelcomeUser from './views/Student/Welcome/WelcomeStudent.jsx'
import WelcomeStudent from './views/Student/Welcome/WelcomeStudent'
import StudentSession from './views/Student/SessionsBoard/SessionsBoard'

import Thanks from './views/Student/Thanks/Thanks'
import NavBar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import FirstStudentForm from './views/Student/Form/FirstStudentForm';
import FirstStudentInform from './views/Student/Inform/FirstStudentInform';
import MultipleChoice from './views/Student/MultipleChoice/MultipleChoice';
import CrudStudents from './views/Administrator/Cruds/CrudStudents/CrudStudents';
import PrincipalView from './views/Principal/PrincipalView';
import MatchForm from './views/Administrator/Match/MatchForm';
import Calendar from './components/Calendar/calendar';








function App() {



  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  const auth = useSelector(state => state.auth)

  // console.log(idStudent)

  const { isLogged } = auth

  const [interest, setInterest] = useState(false)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedAgoraUser')
    const firstLogin = localStorage.getItem('firstLogin')
    // console.log(firstLogin && loggedUserJSON)
    if (firstLogin && loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      const refreshtoken = user.refresh_token

      const getToken = async () => {
        const res = await axios.post(
          'http://localhost:3001/api/refresh_token',
          { refreshtoken }
        )
        // console.log(res)
        dispatch({ type: 'GET_TOKEN', payload: res.data.access_token })
      }
      getToken()
    }
  }, [auth.isLogged, dispatch])

  useEffect(() => {
    if (token) {
      // console.log(token, "user")
      const getUser = () => {
        dispatch(dispatchLogin())
        return fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res))
        })
      }
      getUser()
    }
  }, [token, dispatch])

  const idStudent = useSelector(state => state.auth.user.id)

  useEffect(() => {
    if (idStudent) {
      axios
        .get(`http://localhost:3001/api/student-interest/${idStudent}`)
        .then(res => {
          const interest = res.data
          // console.log(interest)
          if (interest[0].interestsStudent.length > 0) {
            setInterest(true)
          }
        })
    }
  }, [idStudent, auth.isLogged])

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        {/* login */}

        <Route path='/' element={isLogged ? <PrincipalView /> : <Login />} exact />
        <Route path='/forgot_password' element={isLogged ? <WelcomeUser /> : <ForgotPassword />} exact />

        {/* others */}
        <Route path="/principal-view" element={<PrincipalView />} />
        <Route path="/welcome-user" element={interest ? <Thanks /> : <MultipleChoice />} />
        <Route path="/welcome-student" element={<WelcomeStudent />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/form-student/:id" element={<FirstStudentForm />} />
        {/* <Route path="/thanks-student" element={<Thanks/>}/> */}
        <Route path="/inform-student/:id" element={<FirstStudentInform />} />
        <Route path="/student-sessions" element={<StudentSession />} />
        <Route path="/MultipleChoice" element={<MultipleChoice />} />
        <Route path="/CrudStudents" element={<CrudStudents />} />

        <Route path="*" element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        } />



      </Routes>

      <Footer></Footer>
    </>


  )

}

export default App
