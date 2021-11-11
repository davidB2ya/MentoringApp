const User = require('../db/models/User')

// se crea una variable para definir el controlador de la ruta login
const userRouter = require('express').Router()

userRouter.get('/', async (request, response) => {
  const user = await User.find({})
  response.json(user)
})

module.exports = userRouter
