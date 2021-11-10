const { Schema, model } = require('mongoose')
const mongoose = require('mongoose');
const Session = require('../models/Session')
const User = require('../models/User')
const Mentor = require('../models/Mentor')

const sessionReportSchema = new Schema({
  session_number: { type: Schema.ObjectId, ref: Session },
  student: { type: Schema.ObjectId, ref: User },
  mentor: { type: Schema.ObjectId, ref: Mentor },
  registration_date: Date
})

sessionReportSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const SessionReport = model('SessionReport', sessionReportSchema)



module.exports = SessionReport

