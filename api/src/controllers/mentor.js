const Mentor = require('../db/models/Mentor')

// se crea una variable para definir el controlador de la ruta login
const MentorRouter = require('express').Router()

MentorRouter.get('/', async (request, response) => {
  const mentor = await Mentor.find({}).populate('idUser', { role: 1 })

  response.json(mentor)
})

module.exports = MentorRouter
