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
import WelcomeUser from './routes/welcome-user'
import WelcomeStudent from './views/Student/Welcome/WelcomeStudent' 
import StudentProfile from './routes/student-profile'
import StudentSession from './routes/student-sessions';
import CrudStudents from './views/Administrator/Cruds/CrudStudents/CrudStudents';
import MultipleChoice from './views/Students/MultipleChoice/MultipleChoice';


const rootElement = document.getElementById("root")

render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/welcome-user" element={<WelcomeUser/>}/>
        <Route path="/welcome-student" element={<WelcomeStudent/>}/>  
        <Route path="/student-profile-interests" element={<StudentProfile/>}/>  
<<<<<<< HEAD
        <Route path="/student-sessions" element={<StudentSession/>}/>
        <Route path="/CrudStudents" element={<CrudStudents/>}/>  
        <Route path="/MultipleChoice" element={<MultipleChoice/>}/> 
=======
        <Route path="/student-sessions" element={<StudentSession/>}/>  
        <Route path="/admin-panel" element={<admin-panel/>}/>  
>>>>>>> 961f04ff300ae27a27a4d0020ad9041307765b86
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  rootElement
);
