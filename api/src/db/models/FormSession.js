const { Schema, model } = require('mongoose')

const Session = require('../models/Session')
const QuestionBank =require('../models/QuestionBank')

const formSesionSchema = new Schema({
  idSession: { type: Schema.ObjectId, ref: Session },

  idStudent: { type: Schema.ObjectId, ref: Session },
 
  idQuestionBank: { type: Schema.ObjectId, ref: QuestionBank },

  FilledOut: Boolean
})

formSesionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const FormSesion = model('FormSesion', formSesionSchema)

FormSesion.create({})

module.exports = FormSesion
