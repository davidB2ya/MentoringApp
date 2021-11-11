const { Schema, model } = require('mongoose')

// schema creation for users
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter your name!'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Please enter your email!'],
      trim: true,
      unique: true
    },
    passwordHash: {
      type: String,
      required: [true, 'Please enter your password!']
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
    contactNumber: {
      type: Number
    },
    role: {
      type: Number,
      default: 0 // 0 = aspirante, 1 = estudiante 2 = egresado, 3 = formador, 4 = mentor 5=monitor 6=entrevistador 7=observador 8=entreobservador =admin
    },
    avatar: {
      type: String,
      default:
        'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
    },
    programa: {
      type: String,
      default: 'Programate'
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
      ///habilitarlo
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
)
// fixes in userSchema
userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

// compilation of user model
const User = model('User', userSchema)
/* User.create({
  name: 'maria',
  email: 'maria@gmail.com',
  passwordHash: 1234565,
  middleName: 'guadalupe',
  lastName: 'Avila',
  secondSurname: 'Herrera',
  contactNumber: 2373012,
  role: 1,
  avatar: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png',
  programa: 'Programate',
  cohorte: 1,
  state: true

}) */
module.exports = User
