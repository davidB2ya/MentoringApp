const { Schema, model } = require('mongoose')

const adminSchema = new Schema({
  firstName: {
    type: String,
    maxlength: 45
  },
  middleName: {
    type: String,
    maxlength: 45
  },
  lastName: {
    type: String,
    maxlength: 45
  },
  secondSurname: {
    type: String,
    maxlength: 45
  },
  email: {
    type: String,
    trim: true,
    lowercase: true
  },
  contactNumber: {
    type: Number

  },

  state: {
    type: Boolean,
    default: true
  },

  passwordHash: {
    type: String,
    require: true,
    min: 8
  }
})

adminSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

const Admin = model('Admin', adminSchema)

// create user

/* Admin.create({
  firstName: 'lorena',
  middleName: 'maria',
  lastName: 'avila',
  secondSurname: 'lopez',
  email: 'lore123@gmail.com',
  contactNumber: 123456,
  state: true,
  passwordHash: 'lorena'

}) */

module.exports = Admin
