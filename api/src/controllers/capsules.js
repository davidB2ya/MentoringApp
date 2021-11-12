const Capsules = require('../db/models/Capsules')

// A variable is created to define the controller of the Capsules path
const CapsulesRouter = require('express').Router()

CapsulesRouter.get('/', async (request, response) => {
  const capsules = await Capsules.find({})
    .populate('idSession', { numSession: 1, program: 1, cohort: 1, state: 1 })
  response.json(capsules)
})

module.exports = CapsulesRouter
