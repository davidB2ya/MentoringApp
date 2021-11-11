const { Schema, model } = require('mongoose')
const Session = require('./Session')

const QuestionSessionSchema = new Schema({
  idSesion: { type: Schema.ObjectId, ref: Session },

  idStundent: { type: Schema.ObjectId, ref: Session }
})

QuestionSessionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const QuestionSession = model('Question', QuestionSessionSchema)

module.exports = QuestionSession
