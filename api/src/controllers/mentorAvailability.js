const MentorAvailability = require('../db/models/MentorAvailability')

// A variable is created to define the controller of the Capsules path
const menAvailRouter = require('express').Router()

menAvailRouter.get('/', async (request, response) => {
  const idSession = request.body.idSession
  const idUser = request.body.idUser
  const availability = await MentorAvailability.find({
    idStudent: idUser, idSession: idSession
  }).populate('idSession', {
    numSession: 1,
    program: 1,
    cohort: 1,
    state: 1,
    startDate: 1,
    endDate: 1
  })
  response.json(availability)
})

module.exports = menAvailRouter
