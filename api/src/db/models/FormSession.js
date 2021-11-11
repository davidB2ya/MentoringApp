const { Schema, model } = require('mongoose')
const Session = require('./Session')
const BankQuestion = require('./QuestionBank.js')

const formSessionSchema = new Schema({
  idFormSesion: { type: Number },

  idSesion: { type: Schema.ObjectId, ref: Session },

  idStundent: { type: Schema.ObjectId, ref: Session },

  idpreguntas: { type: Schema.ObjectId, ref: BankQuestion },

  diligenciado: {
    type: Boolean
  }
})

formSessionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const FormSession = model('FormSesion', formSessionSchema)

FormSession.create({})

module.exports = FormSession
