const Assignedsession = require('../db/models/AssignedSession')

// se crea una variable para definir el controlador de la ruta login
const assignedsessionRouter = require('express').Router()

assignedsessionRouter.get('/', async (request, response) => {
  const assignedsession = await Assignedsession.find({})
    .populate('session_number', { numSession: 1 })
  response.json(assignedsession)
})

module.exports = assignedsessionRouter
