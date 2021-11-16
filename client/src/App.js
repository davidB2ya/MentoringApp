import { useState } from "react"
import LoginForm from "./components/LoginForm"
import Notification from "./components/Notification"
import loginService from './services/login'
import CrudStudent from'./views/Administrator/Cruds/students/index'
<<<<<<< HEAD
import Navbar from './components/Navbar/Navbar'
=======
import NavBar from './components/Navbar/Navbar';

>>>>>>> 2978b12a13929fe38deb0cf9e20cacc6afd9cc62
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
    <div className="App">
      {/*
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
            
      }*/}

      <CrudStudent/>


    </div>
  );
}

export default App;
