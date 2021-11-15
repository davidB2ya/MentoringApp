import { useState } from "react"
import LoginForm from "./components/LoginForm"
import Notification from "./components/Notification"
import loginService from './services/login'
//import CrudStudent from'./views/Administrator/Cruds/students/index'
//import Navbar from './components/Navbar/Navbar'
import { Link } from "react-router-dom"


function App() {
  

  return (
    <div className="App">
      <h1>Testing Router React</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
      {/*<CrudStudent/>*/}
      <Link to="/welcome-user"></Link>
      <Link to="/welcome-student"></Link>
      </nav>
    </div>
  );
}

export default App;
