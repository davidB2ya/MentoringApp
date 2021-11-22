import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { 
    showErrMsg,
    showSuccessMsg
  } from '../notification/Notification'
import { dispatchLogin } from '../../redux/actions/authActions'
import { useDispatch } from 'react-redux'
import './login.css'



const Login = () => {

  //Inicializo hooks
  const [user, setUser] = useState({
    email: '',
    password: '',
    err: '',
    success: ''
  }) 

  const dispatch = useDispatch() 
  const navigate = useNavigate() 

  const { email, password, err, success } = user
  console.log(user)

  const handleChangeInput = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value, err: '', success: '' })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3001/api/login', {
        email,
        password
      })
      
      setUser({ ...user, err: '', success: res.data.msg })
      window.localStorage.setItem('firstLogin', true)
      window.localStorage.setItem(
        'loggedAgoraUser', JSON.stringify(res.data)
      )
      dispatch(dispatchLogin())
      navigate('/')
    } catch (err) {
      err.response.data.error &&
        setUser({ ...user, err: err.response.data.error, success: '' })
    }
  }

  return (
    <div className='login_page'>
      <h2>Login</h2>
      {err && showErrMsg(err)}
      {success && showSuccessMsg(success)}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email Address</label>
          <input
            type='text'
            placeholder='Enter email address'
            id='email'
            value={email}
            name='email'
            onChange={handleChangeInput}
          />
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            placeholder='Enter password'
            id='password'
            value={password}
            name='password'
            onChange={handleChangeInput}
          />
        </div>

        <div className='row'>
          <button type='submit'>Login</button>
          <Link to='/forgot_password'>Forgot your password?</Link>
        </div>
      </form>

      <p>
        New Customer? <Link to='/register'>Register</Link>
      </p>
    </div>
  )
}

export default Login
