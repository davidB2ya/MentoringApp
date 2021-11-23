
//import Styles from './App.module.css'
//import LoginForm from "./components/LoginForm"
//import Notification from "./components/Notification"
//import loginService from './services/login'
//import CrudStudents from'./views/Administrator/Cruds/CrudStudents/CrudStudents'
//import CrudEditAndAdd from "./components/CrudEditAndAdd/CrudEditAndAdd"
//import CrudSessions from "./views/Administrator/Cruds/CrudSessions/CrudSessions"
//import CrudSessionDetail from "./views/Administrator/Cruds/CrudSessionDetail/CrudSessionDetail"
//import CrudMentor from "./views/Administrator/Cruds/CrudMentor/CrudMentor"
//import Styles from './App.module.css'
//import LoginForm from "./components/LoginForm"
//import Notification from "./components/Notification"
//import loginService from './services/login'
//import CrudStudents from'./views/Administrator/Cruds/CrudStudents/CrudStudents'
//import CrudEditAndAdd from "./components/CrudEditAndAdd/CrudEditAndAdd"
//import CrudSessions from "./views/Administrator/Cruds/CrudSessions/CrudSessions"
//import CrudSessionDetail from "./views/Administrator/Cruds/CrudSessionDetail/CrudSessionDetail"
//import CrudMentor from "./views/Administrator/Cruds/CrudMentor/CrudMentor"
//import CrudStudent from'./views/Administrator/Cruds/students/index'


import { Outlet, Link } from "react-router-dom"
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import Styles from './index.module.css'
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// login
import Login from './components/login/Login.jsx'
import NotFound from './views/General/NotFound'
import ForgotPassword from './components/login/ForgotPassword.jsx'

//others
import WelcomeUser from './views/Student/Welcome/WelcomeStudent.jsx'
import WelcomeStudent from './views/Student/Welcome/WelcomeStudent'
import StudentSession from './views/Student/SessionsBoard/SessionsBoard';
import Thanks from './views/Student/Thanks/Thanks';
import NavBar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import FirstStudentForm from './views/Student/Form/FirstStudentForm';
import FirstStudentInform from './views/Student/Inform/FirstStudentInfrom';
import MultipleChoice from './views/Student/MultipleChoice/MultipleChoice';
import CrudStudents from './views/Administrator/Cruds/CrudStudents/CrudStudents';
import PrincipalView from './views/Principal/PrincipalView';

function UserLogged() {

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        {/* login */}

        {/* <Route path= '/forgot_password' element={<ForgotPassword/>} exact/> */}

        {/* others */}
        <Route path="/" element={<PrincipalView />} />
        <Route path="/welcome-user" element={<WelcomeUser />} />
        <Route path="/welcome-student" element={<WelcomeStudent />} />
        <Route path="/form-student/:id" element={<FirstStudentForm />} />
        <Route path="/thanks-student" element={<Thanks />} />
        <Route path="/inform-student" element={<FirstStudentInform />} />
        <Route path="/student-sessions" element={<StudentSession />} />
        <Route path="/admin-panel" element={<admin-panel />} />
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

function UserNotLogged() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} exact />
        <Route path='/forgot_password' element={<ForgotPassword />} exact />
        <Route path="*" element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        } />
      </Routes>
    </>
  )
}


function App() {
  const auth = useSelector(state => state.auth)
  const { isLogged, isAdmin } = auth

  useEffect(() => {
    window.localStorage.setItem('isLogged', isLogged)
  }, [isLogged])

  const userLogged = localStorage.getItem("isLogged");

  return (
    <>
      {userLogged === true ? <UserLogged /> : <UserNotLogged />}
    </>
  )


}

export default App;
