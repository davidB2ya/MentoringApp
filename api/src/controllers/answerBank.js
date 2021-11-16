const AnswerBank = require('../db/models/AnswerBank')

// A variable is created to define the controller of the AnswerBank path
const AnswerBankRouter = require('express').Router()

AnswerBankRouter.get('/', async (request, response) => {
  const answerBank = await AnswerBank.find({})
    .populate('idSession', { numSession: 1, program: 1, cohort: 1, state: 1 })
    .populate('idUser', { firstName: 1, lastName: 1, rol: 1 })
  response.json(answerBank)
})

module.exports = AnswerBankRouter
