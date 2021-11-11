const Session = require('../db/models/Session')

// se crea una variable para definir el controlador de la ruta login
const sessionRouter = require('express').Router()

sessionRouter.get('/', async (request, response) => {
  const session = await Session.find({})
  response.json(session)
})

module.exports = sessionRouter
