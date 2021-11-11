const { Schema, model } = require('mongoose')

const User = require('./User')


const MentorSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: User
  },

  profile: {
    type: Schema.ObjectId,
    ref: User
  },

  CargoActual: { type: String },

  Empresa: { type: String },

  hijos: { type: Number },

  interesesMentores: { type: String },

  numeroDeEstudiantes: { type: Number },

  AsignacionEstudiante: { type: Schema.ObjectId, ref: User }
})

MentorSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

const Mentor = model('Mentor', MentorSchema)((module.exports = Mentor))
