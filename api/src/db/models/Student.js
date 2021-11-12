const { Schema, model } = require('mongoose')

// required models
const User = require('../models/User')
const Profile = require('../models/Profile')


// schema creation for students
const studentSchema = new Schema({
  //the idUser key store the id of the model user
  idUser: {
    type: Schema.ObjectId,
    ref: User
  },
  //the idProfile key store the id of the model profile
  idProfile: {
    type: Schema.ObjectId,
    ref: Profile
  },
  //the assignedMentor key stores the mentor assigned to the student
  assignedMentor: {
    type: String
  },
  // the interests key stores the student's selected interests
  interests: {
    type: Array
  }
})

// fixes in studentSchema
studentSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// create a document
// Student.create({
//   idUser: ''
//   idSession: '618c50083adc233c425bc0be',
//   idProfile: '618d539da4628ba840e676a0',
//   assignedMentor: 'Juan de los Palotes'
// })

// compilation of session report student
const Student = model('Student', studentSchema)

module.exports = Student
