const { Schema, model } = require('mongoose')
const Session = require('../models/Session')
const User = require('../models/User')

const questionBankSchema = new Schema({
  idSession: {
    type: Schema.ObjectId,
    ref: Session
  },
  idUser: {
    type: Schema.ObjectId,
    ref: User
  },
  respType: {
    type: String
  },
  option: {
    type: Array
  },
  question: {
    type: String,
    maxlength: 256
  },
  vote: {
    type: Boolean
  },
  receiver: {
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

// create a document
// QuestionBank.create({
//   idSession: '618c50083adc233c425bc0be',
//   idUser: '618d69634878ade58ceaba22',
//   respType: 'Respuesta simple',
//   question: 'Que edad tienes',
//   vote: false,
//   receiver: false
// })

module.exports = QuestionBank
