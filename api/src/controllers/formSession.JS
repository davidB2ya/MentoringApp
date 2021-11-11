const FormSession = require('../db/models/QuestionSession')

// se crea una variable para definir el controlador de la ruta login
const FormSessionRouter = require('express').Router()

FormSession.get('/', async (request, response) => {
  const formSession = await FormSession.find({})
    .populate('idSession', { idSesion: 1 })
    .populate('idStudent', { iStudent: 1 })
    .populate('idPreguntas', { idPreguntas: 1 })
  response.json(formSession)
})

module.exports = FormSessionRouter
