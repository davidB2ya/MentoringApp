import React from 'react';
import ReactDOM from 'react-dom';
import Styles from'./index.module.css'
import { render } from 'react-dom';
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import WelcomeUser from './views/Student/Welcome/WelcomeStudent.jsx'
import WelcomeStudent from './views/Student/Welcome/WelcomeStudent' 
import StudentSession from './views/Student/SessionsBoard/SessionsBoard';
import Thanks from './views/Student/Thanks/Thanks';
import FirstStudentForm from './views/Student/Form/FirstStudentForm';
import FirstStudentInform from './views/Student/Inform/FirstStudentInform';
// import { Context } from "./Context";

//Context
// import SessionState from "./context/Session/SessionState"

const rootElement = document.getElementById("root")

render(
  
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/welcome-user" element={<WelcomeUser/>}/>
        <Route path="/welcome-student" element={<WelcomeStudent/>}/>
        <Route path="/form-student/:id" element={<FirstStudentForm/>}/>
        <Route path="/thanks-student" element={<Thanks/>}/>
        <Route path="/inform-student" element={<FirstStudentInform/>}/> 
        <Route path="/student-sessions" element={<StudentSession/>}/>   
        <Route path="/admin-panel" element={<admin-panel/>}/>  
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  rootElement
);
