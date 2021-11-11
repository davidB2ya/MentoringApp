const { Schema, model } = require('mongoose')

// required models
const Session = require('../models/Session')

// schema creation for question bank 
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

// fixes in questionBankSchema
questionBankSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// compilation of answer bank model
const QuestionBank = model('QuestionBank', questionBankSchema)

module.exports = QuestionBank