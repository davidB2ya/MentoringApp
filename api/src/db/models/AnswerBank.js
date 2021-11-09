const { Schema, model } = require('mongoose')
// const idSession = mongoose.model('Session')
// const idStudent = mongoose.model('Student')
// const idQuestion = mongoose.model('Question')

const answerBankSchema = new Schema({
  idSession: {
    type: Number
  },
  idStudent: {
    type: Number
  },
  idQuestion: {
    type: Number
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
AnswerBank.create({
  idSession: 1,
  idStudent: 2,
  idQuestion: 3,
  answer: 'David Bedoya'
})

module.exports = AnswerBank
