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
/* import WelcomeUser from './views/Student/Welcome/WelcomeStudent.jsx'
import WelcomeStudent from './views/Student/Welcome/WelcomeStudent' 
import StudentSession from './views/Student/SessionsBoard/SessionsBoard';
import Thanks from './views/Student/Thanks/Thanks';
import FirstStudentForm from './views/Student/Form/FirstStudentForm';
import FirstStudentInform from './views/Student/Inform/FirstStudentInform'; */
// import { Context } from "./Context";

import './index.module.css'
import { BrowserRouter as Router } from 'react-router-dom'
import DataProvider from './redux/store'

ReactDOM.render(
  <DataProvider>
    <Router>
      <App />
    </Router>
  </DataProvider>,
  document.getElementById('root')
)