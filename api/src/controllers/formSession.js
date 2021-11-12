const sessionForm = require('../db/models/FormSession')

// se crea una variable para definir el controlador de la ruta login
const FormSessionRouter = require('express').Router()

FormSessionRouter.get('/', async (request, response) => {
  const formSession = await sessionForm.find({})
    .populate('idSession', { idSesion: 1 })
    .populate('idStudent', { iStudent: 1 })
    .populate('idQuestionBank', { question:  1 })
  response.json(formSession)
})

module.exports = FormSessionRouter
