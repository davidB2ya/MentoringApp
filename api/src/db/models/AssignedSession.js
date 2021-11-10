const { Schema, model } = require('mongoose')
const Session = require('../models/Session')
const User = require('../models/User')
const Mentor = require('../models/Mentor')
const assignedsessionSchema = new Schema({
  idSession: {
    type: Schema.ObjectId,
    ref: Session
  },
  numSession: {
    type: Number
  },
  idUser: {
    type: Schema.ObjectId,
    ref: User
  },
  idMentor: {
    type: Schema.ObjectId,
    ref: Mentor
  },

  dateAsig: {
    type: Date
  }
})

assignedsessionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Assignedsession = model('Assignedsession', assignedsessionSchema)

// create user

Assignedsession.create({
  idSession: '618bfd01d225ca76abda7314',
  numSession: 1,
  idUser: '618c023bd49fa62adcc82139',
  dateAsig: 10 - 11 - 2021,
  idMentor: '618bc878e36a40cdccf91d33'

})

module.exports = Assignedsession
