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
//   idSession: '618c50083adc233c425bc0be',
//   idUser: '618d69634878ade58ceaba22',
//   idQuestion: '618d7acd318adb3d279d77a9',
//   answer: '23 años'
// })

module.exports = AnswerBank
