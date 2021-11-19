import React from 'react';
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
import WelcomeCard from './components/welcomeCard/WelcomeCard';
import FirstStudentInform from './views/Student/Inform/FirstStudentInfrom';
import FirstStudentForm from './views/Student/Form/FirstStudentForm';
import Thanks from './views/Student/Thanks/Thanks';
import PanelAdmin from './views/Administrator/PanelAdmin/PanelAdmin';




const rootElement = document.getElementById("root")

render(
  <BrowserRouter>
    <React.StrictMode>

      <Routes>
        
        <Route path="/" element={<App/>}/>
        <Route path="/welcome-user" element={<WelcomeUser/>}/>
        <Route path="/welcome-student" element={<WelcomeStudent/>}/>
        <Route path="/form-student" element={<FirstStudentForm/>}/>
        <Route path="/thanks-student" element={<Thanks/>}/>
        <Route path="/inform-student" element={<FirstStudentInform/>}/>
        FirstStudentInfrom
        <Route path="/student-profile-interests" element={<StudentProfile/>}/>  
        <Route path="/student-sessions" element={<StudentSession/>}/>
        <Route path="/CrudStudents" element={<CrudStudents/>}/>  
        <Route path="/MultipleChoice" element={<MultipleChoice/>}/> 
        <Route path="/WelcomeCard" element={<WelcomeCard/>}/> 
        <Route path="/PanelAdmin" element={<PanelAdmin/>}/> 
        
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  rootElement
);
