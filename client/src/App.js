import { useState } from "react"
import Styles from './App.module.css'
import LoginForm from "./components/LoginForm"
import Notification from "./components/Notification"
import loginService from './services/login'
<<<<<<< HEAD
import CrudStudent from'./views/Administrator/Cruds/students/index'

import NavBar from './components/Navbar/Navbar';


function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const [errorMessage, setErrorMessage] = useState(null)


  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username,
        password
      })
=======
import CrudStudents from'./views/Administrator/Cruds/CrudStudents/CrudStudents'
import CrudEditAndAdd from "./components/CrudEditAndAdd/CrudEditAndAdd"
import CrudSessions from "./views/Administrator/Cruds/CrudSessions/CrudSessions"
import CrudSessionDetail from "./views/Administrator/Cruds/CrudSessionDetail/CrudSessionDetail"
import CrudMentor from "./views/Administrator/Cruds/CrudMentor/CrudMentor"
//import CrudStudent from'./views/Administrator/Cruds/students/index'
//import Navbar from './components/Navbar/Navbar'
import { Outlet, Link } from "react-router-dom"
>>>>>>> 60594f9235fe21f54745de56ac2ccd170d5c3cf1


function App() {
  

  return (
    <div className="App">
<<<<<<< HEAD
      {/*
      <Notification message={errorMessage} />
        {
        user
          ? <h1>Existe usuario</h1>
          : <LoginForm
              username={username}
              password={password}
              handleUsernameChange={
                ({ target }) => setUsername(target.value)
              }
              handlePasswordChange={
                ({ target }) => setPassword(target.value)
              }
              handleSubmit={handleLogin}
            />
            
      }*/}

      <CrudStudent/>
      


=======
      <h1>Bienvenido Usuario genérico</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
      {/*<CrudStudent/>*/}
      <Link to="/welcome-user">| Pagina Bienvenida Usuario |</Link>
      <Link to="/welcome-student">| Pagina Bienvenida estudiante |</Link>
      <Link to="/student-profile-interests">| Perfil de estudiante |</Link>
      <Link to="/student-sessions">| Sesiones |</Link>
      </nav>
      <Outlet />
>>>>>>> 60594f9235fe21f54745de56ac2ccd170d5c3cf1
    </div>
  );  
}

export default App;
