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

      window.localStorage.setItem(
        'loggedNoteAppUser', JSON.stringify(user)
      )

      setUser(user)
      setUsername('')
      setPassword('')
    } catch (e) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  return (
    <div className={Styles.App}>
      
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
            
      }

     

    </div>
  );  
}

export default App;
