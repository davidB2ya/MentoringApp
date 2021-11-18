import { useState } from "react"
import Styles from './App.module.css'
import LoginForm from "./components/LoginForm"
import Notification from "./components/Notification"
import loginService from './services/login'
import CrudStudents from'./views/Administrator/Cruds/CrudStudents/CrudStudents'
import CrudEditAndAdd from "./components/CrudEditAndAdd/CrudEditAndAdd"
import CrudSessions from "./views/Administrator/Cruds/CrudSessions/CrudSessions"
import CrudSessionDetail from "./views/Administrator/Cruds/CrudSessionDetail/CrudSessionDetail"
import CrudMentor from "./views/Administrator/Cruds/CrudMentor/CrudMentor"

<<<<<<< HEAD
=======
import Styles from './App.module.css'
import LoginForm from "./components/LoginForm"
import Notification from "./components/Notification"
import loginService from './services/login'
import CrudStudents from'./views/Administrator/Cruds/CrudStudents/CrudStudents'
import CrudEditAndAdd from "./components/CrudEditAndAdd/CrudEditAndAdd"
import CrudSessions from "./views/Administrator/Cruds/CrudSessions/CrudSessions"
import CrudSessionDetail from "./views/Administrator/Cruds/CrudSessionDetail/CrudSessionDetail"
import CrudMentor from "./views/Administrator/Cruds/CrudMentor/CrudMentor"
//import Styles from './App.module.css'
//import LoginForm from "./components/LoginForm"
//import Notification from "./components/Notification"
//import loginService from './services/login'
//import CrudStudents from'./views/Administrator/Cruds/CrudStudents/CrudStudents'
//import CrudEditAndAdd from "./components/CrudEditAndAdd/CrudEditAndAdd"
//import CrudSessions from "./views/Administrator/Cruds/CrudSessions/CrudSessions"
//import CrudSessionDetail from "./views/Administrator/Cruds/CrudSessionDetail/CrudSessionDetail"
//import CrudMentor from "./views/Administrator/Cruds/CrudMentor/CrudMentor"
>>>>>>> 458998d0b18ca5dd366eb1fa0dc6cfb8f7a1b842
//import CrudStudent from'./views/Administrator/Cruds/students/index'
//import Navbar from './components/Navbar/Navbar'
import { Outlet, Link } from "react-router-dom"


function App() {
  

  return (
    <div className="App">
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
<<<<<<< HEAD
      <Link to="/AdminPanel">| admin |</Link>
=======
      <Link to="/admin-panel">| admin |</Link>
      <Link to="/WelcomeCard">| WelcomeCard |</Link>
      <Link to="/CrudStudents">| CrudStudents |</Link>
      <Link to="/MultipleChoice">| MultipleChoice |</Link>

>>>>>>> 458998d0b18ca5dd366eb1fa0dc6cfb8f7a1b842

      </nav>
      <Outlet />
    </div>
  );  
}

export default App;
