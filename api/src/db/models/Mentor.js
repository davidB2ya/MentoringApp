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

  ActualJobPosition: { type: String, default: 'backend' },

  Company: { type: String },

  sons: { type: Number },

  mentoringInterests: { type: String },

  numeroDeEstudiantes: { type: Number },

  NumberOfStudents: { type: Schema.ObjectId, ref: User }
})

MentorSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

const Mentor = model('Mentor', MentorSchema)

Mentor.create({
  ActualJobPosition: 'backend',
  Company: 'Educamas',
  sons: '1',
  mentoringInterests: 'viajar'
})

module.exports = Mentor
