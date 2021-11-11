const QuestionBank = require('../db/models/QuestionBank')

// A variable is created to define the controller of the QuestionBank path
const QuestionBankRouter = require('express').Router()

QuestionBankRouter.get('/', async (request, response) => {
  const questionBank = await QuestionBank.find({})
    .populate('session_number', { numSession: 1 })
  response.json(questionBank)
})

module.exports = QuestionBankRouter
