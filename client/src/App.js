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
      <Link to="/admin-panel">| admin |</Link>

      </nav>
      <Outlet />
    </div>
  );  
}

export default App;
