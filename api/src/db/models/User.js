const { Schema, model } = require('mongoose')

// 
const userSchema = new Schema({
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
  img: {
    type: String,
    trim: true
  },
  rol: {
    candidate: {
      type: Boolean,
      default: true
    },
    student: {
      type: Boolean,
      default: false
    },
    developer: {
      type: Boolean,
      default: false
    },
  },

  Program: {
    type: String,
    default: "Programate"
  },

  cohorte: {
    num: {
      type: Number

    },
    name: {
      type: String

    }

  },
  state: {
    type: Boolean,
    default: true
  },
  passwordHash: {
    type: String,
    min: 8
  }
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

const User = model('User', userSchema)

module.exports = User
