const Session = require('../db/models/Session')

// A variable is created to define the controller of the Session path
const sessionRouter = require('express').Router()

sessionRouter.get('/', async (request, response) => {
  const session = await Session.find({})
  response.json(session)
})

module.exports = sessionRouter
