const Mentor = require('../db/models/Mentor')

// se crea una variable para definir el controlador de la ruta login
const mentorRouter = require('express').Router()

mentorRouter.get('/', async (request, response) => {
  const mentor = await Mentor.find({})
  response.json(mentor)
})

module.exports = mentorRouter
