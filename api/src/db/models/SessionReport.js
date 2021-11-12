const { Schema, model } = require('mongoose')

// required models
const Session = require('../models/Session')
const Student = require('../models/User')
const Mentor = require('../models/Mentor')

// schema creation for session report
const sessionReportSchema = new Schema({
  // the idSession key store the id of the model session
  idSession: { type: Schema.ObjectId, ref: Session },
  // the idStudent key store the id of the model User
  idStudent: { type: Schema.ObjectId, ref: Student },
  // the idMentor key store the id of the model mentor
  idMentor: { type: Schema.ObjectId, ref: Mentor },
  // The filledOut_date key stores the date on which the report was filled out
  filledOut_date: Date,
  // The filledOut key stores if the form was filled out
  filledOut: Boolean
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

SessionReport.create({
  idSession: '618c4f9bd9222aaf6922ab0c',
  idStudent: '618d9dc4fd3828e8550731c3',
  idMentor: '618d78f66d3cf89d7abfe0cd',
  filledOut_date: '1969-12-31T23:59:57.978+00:00',
  filledOut: false
})

module.exports = SessionReport
