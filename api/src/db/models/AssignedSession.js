const { Schema, model } = require('mongoose')
const Session = require('../models/Session')
const User = require('../models/User')
const Mentor = require('../models/Mentor')

// schema creation for assigned session
const assignedSessionSchema = new Schema({
  idSession: {
    type: Schema.ObjectId,
    ref: Session
  },
  idStudent: {
    type: Schema.ObjectId,
    ref: User
  },
  idMentor: {
    type: Schema.ObjectId,
    ref: Mentor
  },
  dateAsig: {
    type: Date
  },
  link: String
})

// fixes in assignedSessionSchema
assignedSessionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// compilation of assigned session
const Assignedsession = model('Assignedsession', assignedSessionSchema)


module.exports = Assignedsession
