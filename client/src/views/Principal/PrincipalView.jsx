import React from 'react'
import { Outlet, Link } from "react-router-dom"

const PrincipalView = () => {
    return (
    <div className="App">
      <h1>Bienvenido Usuario genérico</h1>
      
      
      
      <Link to="/welcome-user">| Pagina Bienvenida Usuario |</Link>
      <Link to="/welcome-student">| Pagina Bienvenida estudiante |</Link>
      <Link to="/student-profile-interests">| Perfil de estudiante |</Link>
      <Link to="/student-sessions">| Sesiones |</Link>
      <Link to="/AdminPanel">| admin |</Link>
      <Link to="/admin-panel">| admin |</Link>
      <Link to="/WelcomeCard">| WelcomeCard |</Link>
      <Link to="/CrudStudents">| CrudStudents |</Link>
      <Link to="/MultipleChoice">| MultipleChoice |</Link>                                                
    </div>  
    )
}

export default PrincipalView
