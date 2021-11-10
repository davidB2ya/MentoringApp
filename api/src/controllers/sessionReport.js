const SessionReport = require('../db/models/SessionReport')

// se crea una variable para definir el controlador de la ruta login
const SessionReportRouter = require('express').Router()

SessionReportRouter.get('/', async (request, response) => {
  const sessionReport = await SessionReport.find({})
    .populate('session_number', { numSession: 1 })
    .populate('student', { firstName: 1 })
    .populate('mentor', { firstName: 1 })
  response.json(sessionReport)
})

module.exports = SessionReportRouter
