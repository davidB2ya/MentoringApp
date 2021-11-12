import { useState } from "react"
import LoginForm from "./components/LoginForm"
import Notification from "./components/Notification"
import loginService from './services/login'
import CrudStudent from'./views/Administrator/Cruds/students/index'

function App() {
  

  return (
    <div className="App">

      <CrudStudent/>

    </div>
  );
}

export default App;
