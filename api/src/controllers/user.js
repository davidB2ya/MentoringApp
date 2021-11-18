const User = require('../db/models/User')

// se crea una variable para definir el controlador de la ruta login
const userRouter = require('express').Router()

userRouter.get('/', async (request, response) => {
  const user = await User.findOne({ _id: "619552eb182c07042c7d1ad6"}, {_id: 1})
  response.json(user)
})

module.exports = userRouter