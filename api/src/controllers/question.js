const QuestionSession = require('../db/models/QuestionSession')

// se crea una variable para definir el controlador de la ruta login
const QuestionSessionRouter = require('express').Router()

QuestionSessionRouter.get('/', async (request, response) => {
  const questionSession = await QuestionSession.find({})
    .populate('idSession', { idSesion: 1 })
    .populate('idStudent', { iStudent: 1 })
  response.json(questionSession)
})

module.exports = QuestionSessionRouter
