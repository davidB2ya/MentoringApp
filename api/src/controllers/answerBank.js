const AnswerBank = require('../db/models/AnswerBank')

// A variable is created to define the controller of the AnswerBank path
const AnswerBankRouter = require('express').Router()

AnswerBankRouter.get('/', async (request, response) => {
  const answerBank = await AnswerBank.find({})
  response.json(answerBank)
})

module.exports = AnswerBankRouter
