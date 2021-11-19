const FormStudent = require('../db/models/QuestionBank')
const AnswerForm = require('../db/models/AnswerBank')

// get method: questions that have the session number equal to the form number

const FormStudentRouter = require('express').Router()
const AnswerFormRouter = require('express').Router()

FormStudentRouter.get('/:questionBank', async (request, response) => {
  const formStudent = await FormStudent.find({})
    .populate('idSession', { numSession: 1 })
    .populate('idQuestionBank', { question: 1 })
  response.json(formStudent)
})

// post
AnswerFormRouter.post('/', (req, res) => {
  console.log('POST /api/answerform')
  console.log(req.body)
  res.status(200).send({ message: 'se ha recibido' })

  let answerform = new AnswerForm()
  answerform.idSession = req.body.idSession
  answerform.idUser = req.body.idUser
  answerform.idQuestion = req.body.idQuestion
  answerform.answer = req.body.answer

  answerform.save((err, answerformStored) => {
    if (err) res.status(500).send({ message: 'error a salvar' })
    res.status(200).send({ answerform: answerformStored })
  })
})

module.exports = {
  AnswerFormRouter,
  FormStudentRouter
}
