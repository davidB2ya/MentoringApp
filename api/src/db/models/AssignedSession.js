const { Schema, model } = require('mongoose')

// required models
const Session = require('../models/Session')
const User = require('../models/User')
const Mentor = require('../models/Mentor')

// schema creation for assigned session
const assignedSessionSchema = new Schema({
  // the idSession key store the id of the model session
  idSession: {
    type: Schema.ObjectId,
    ref: Session
  },
  // the idStudent key store the id of the model User
  idStudent: {
    type: Schema.ObjectId,
    ref: User
  },
  // the idMentor key store the id of the model mentor
  idMentor: {
    type: Schema.ObjectId,
    ref: Mentor
  },
  // The dateAsig key stores the date assigned for the session
  dateAsig: {
    type: Date
  },
  // The link key stores the link for the assigned session
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
const assignedSession = model('Assignedsession', assignedSessionSchema)

assignedSession.create({
  idSession: '618c4f9bd9222aaf6922ab0c',
  idStudent: '618d9dc4fd3828e8550731c3',
  idMentor: '618d78f66d3cf89d7abfe0cd',
  dateAsig: '1969-12-31T23:59:57.978+00:00',
  link: 'https://meet.google.com/swf-unxg-otr'
})

module.exports = Assignedsession
