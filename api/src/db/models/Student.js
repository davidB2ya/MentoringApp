const { Schema, model } = require('mongoose')
const User = require('../models/User')
const Profile = require('../models/Profile')

const studentSchema = new Schema({
  idUser: {
    type: Schema.ObjectId,
    ref: User
  },
  idProfile: {
    type: Schema.ObjectId,
    ref: Profile
  },
  assignedMentor: {
    type: String
  },
  interests: {
    type: Array
  }
})

studentSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// compile our model
const Student = model('Student', studentSchema)

// create a document
// Student.create({
//   idSession: '618c50083adc233c425bc0be',
//   idProfile: '618d539da4628ba840e676a0',
//   assignedMentor: 'Juan de los Palotes'
// })

module.exports = Student
