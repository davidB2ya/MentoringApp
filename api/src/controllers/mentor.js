const Mentor = require('../db/models/Mentor')

// se crea una variable para definir el controlador de la ruta login
const MentorRouter = require('express').Router()

MentorRouter.get('/', async (request, response) => {
  const mentor = await Mentor.find({}).populate('user', {
    role: 1,
    Gender: 1,
    PreviouStudie: 1,
    Age: 1
  })

  response.json(mentor)
})

module.exports = MentorRouter
