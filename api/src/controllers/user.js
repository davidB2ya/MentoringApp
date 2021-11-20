const User = require('../db/models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const sendMail = require('./sendMail')

const {CLIENT_URL} = process.env

// se crea una variable para definir el controlador de la ruta login
const userRouter = require('express').Router()
const loginRouter = require('express').Router()
const forgotPassRouter = require('express').Router()
const registerAdminRouter = require('express').Router()
const registerRouter = require('express').Router()

userRouter.get('/', async (req, res) => {
  // using .find() without a paramter will match on all user instances
  try {
    const user = await User.findById(req.user.id).select('-password')

    res.json(user)
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
})

loginRouter.post('/', async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    const isMatch =
      user === null ? false : await bcrypt.compare(password, user.passwordHash)
    if (!isMatch) {
      res.status(401).json({
        error: 'Invalid password or user'
      })
    }

    const refresh_token = createRefreshToken({ id: user._id })

    res.send({
      email: user.email,
      refresh_token,
      msg: 'Login success!'
    })
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
})

forgotPassRouter.post('/', async (req, res) => {
  try {
    const {email} = req.body
    const user = await User.findOne({email})
    if(!user) return res.status(400).json({msg: "This email does not exist."})

    const access_token = createAccessToken({id: user._id})
    const url = `${CLIENT_URL}/user/reset/${access_token}`

    sendMail(email, url, "Reset your password")
    res.json({msg: "Re-send the password, please check your email."})
  } catch (err) {
    return res.status(500).json({msg: err.message})
  }
})

registerAdminRouter.post('/', async (req, res) => {
  try{
    const {name, email, password, role} = req.body

    if(!name || !email || !password || !role)
        return res.status(400).json({msg: "Please fill in all fields."})

    if(!validateEmail(email))
        return res.status(400).json({msg: "Invalid emails."})

    const user = await User.findOne({email})

    if(user) return res.status(400).json({msg: "This email already exists."})

    if(password.length < 6)
        return res.status(400).json({msg: "Password must be at least 6 characters."})

    const passwordHash = await bcrypt.hash(password, 12)

    const newUser = new User({
        name, email, passwordHash, role
    })

    console.log(newUser)
    await newUser.save()
    res.json({msg: "User has been create!"})

  } catch (err) {
    return res.status(500).json({msg: err.message})
  }
})


const  validateEmail = (email) =>{
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

const createActivationToken = (payload) => {
  return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {expiresIn: '5m'})
}

registerRouter.post('/', async (req, res) => {
  try{
    const {name, email, password} = req.body

    if(!name || !email || !password)
        return res.status(400).json({msg: "Please fill in all fields."})

    if(!validateEmail(email))
        return res.status(400).json({msg: "Invalid emails."})

    const user = await User.findOne({email})

    if(user) return res.status(400).json({msg: "This email already exists."})

    if(password.length < 6)
        return res.status(400).json({msg: "Password must be at least 6 characters."})

    const passwordHash = await bcrypt.hash(password, 12)

    const newUser = {
        name, email, passwordHash 
    }

    const activation_token = createActivationToken(newUser)

    const url = `${CLIENT_URL}/user/activate/${activation_token}`
    sendMail(email, url, "Verify your email address")


    res.json({msg: "Register Success! Please activate your email to start."})

  } catch (err) {
    return res.status(500).json({msg: err.message})
  }
})


module.exports = { userRouter, loginRouter, forgotPassRouter, registerAdminRouter, registerRouter }
