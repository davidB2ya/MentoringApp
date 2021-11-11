const { Schema, model } = require('mongoose')
const Session = require('../models/Session')

const formSesionSchema = new Schema({
  idFormSesion: { type: Schema.ObjectId, ref: Session },

  idSesion: { type: Schema.ObjectId, ref: Session },

  idStundent: { type: Schema.ObjectId, ref: Session },
 
  idpreguntas: { type: Schema.ObjectId, ref: Session }

  diligenciad: { type: Boolean}
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
