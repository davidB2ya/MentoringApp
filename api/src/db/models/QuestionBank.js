const { Schema, model } = require('mongoose')
const Session = require('./Session')

const questionBankSchema = new Schema({
  idSession: {
    type: Schema.ObjectId,
    ref: Session
  },
  respType: {
    type: String
  },
  option: {
    type: Array
  },
  question: {
    type: String,
    maxlength: 128
  },
  vote: {
    type: Boolean
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

/* create a document
QuestionBank.create({
  idSession: '618bc84fb45bddcf56a374ee',
  question: 'Como te llamas',
  respType: 'Respuesta simple'
}) */

module.exports = QuestionBank
