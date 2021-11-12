const { Schema, model } = require('mongoose')

// required models
const Session = require('../models/Session')
const Student = require('../models/Student')
const Mentor = require('../models/Mentor')

// schema creation for session report 
const sessionReportSchema = new Schema({
  idSession: { type: Schema.ObjectId, ref: Session },
  student: { type: Schema.ObjectId, ref: User },
  mentor: { type: Schema.ObjectId, ref: Mentor },
  registration_date: Date
})

// fixes in sessionReportSchema
sessionReportSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// compilation of session report model
const SessionReport = model('SessionReport', sessionReportSchema)

module.exports = SessionReport
