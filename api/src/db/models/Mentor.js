const { Schema, model } = require('mongoose')

// required models
const User = require('./User')
const Profile = require('../models/Profile')

// schema creation for mentors
const MentorSchema = new Schema({
  // the idUser key store the id of the model user
  idUser: {
    type: Schema.ObjectId,
    ref: User
  },
  // the idProfile key store the id of the model profile
  idProfile: {
    type: Schema.ObjectId,
    ref: Profile
  },
  // The ActualJobPosition key stores the current position of the mentor
  ActualJobPosition: String,
  // The Company key stores the mentor's current job
  Company: String,
  // The sons key stores the mentor's children
  sons: Number,
  // The interests key stores the mentor's interests
  interests: [String],
  // The numeStudents key stores the number of students the mentor wants
  numeStudents: Number,
  // The idUser key stores the assigned students
  studentAssignment: [{
    type: Schema.ObjectId,
    ref: User
  }] 
})

// fixes in MentorSchema
MentorSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

// compilation of mentor model
const Mentor = model('Mentor', MentorSchema)

module.exports = Mentor
