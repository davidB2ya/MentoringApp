const { Schema, model } = require('mongoose')

// schema creation for admin
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

// fixes in adminSchema
adminSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

// compilation of admin model
const Admin = model('Admin', adminSchema)

module.exports = Admin
