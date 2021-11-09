const { Schema, model } = require('mongoose')
// const idSession = mongoose.model('Session')

const questionBankSchema = new Schema({
  idSession: {
    type: Number
  },
  numSession: {
    type: Number
  },
  question: {
    type: String,
    maxlength: 128
  }
})

questionBankSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// compile our model
const QuestionBank = model('QuestionBank', questionBankSchema)

// create a document
QuestionBank.create({
  idSession: '1',
  numSession: 1,
  question: 'Como te llamas'
})

module.exports = QuestionBank
