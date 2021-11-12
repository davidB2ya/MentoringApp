const SessionReport = require('../db/models/SessionReport')

// se crea una variable para definir el controlador de la ruta login
const SessionReportRouter = require('express').Router()

SessionReportRouter.get('/', async (request, response) => {
  const sessionReport = await SessionReport.find({})
    .populate('idSession', { numSession: 1 })
    .populate('idStudent', { firstName: 1 })
    .populate('idMentor', { firstName: 1 })
  response.json(sessionReport)
})

module.exports = SessionReportRouter
