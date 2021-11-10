const { Schema, model } = require('mongoose')
const Session = require('../models/Session')
const User = require('../models/User.js')
const Question = require('../models/QuestionBank')

const answerBankSchema = new Schema({
  idSession: {
    type: Schema.ObjectId,
    ref: Session
  },
  idUser: {
    type: Schema.ObjectId,
    ref: User
  },
  idQuestion: {
    type: Schema.ObjectId,
    ref: Question
  },
  answer: {
    type: String,
    maxlength: 256
  }
})

answerBankSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// compile our model
const AnswerBank = model('AnswerBank', answerBankSchema)

// create a document
// AnswerBank.create({
//   idSession: '618bfd01d225ca76abda7314',
//   idUser: '618c023bd49fa62adcc82139',
//   idQuestion: '618c4556f14590d7b47b16a8',
//   answer: 'David Bedoya'
// })

module.exports = AnswerBank
