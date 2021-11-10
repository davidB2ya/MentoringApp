const { Schema, model } = require('mongoose')

const mentorSchema = new Schema({
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
  actualAge: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
    maxlength: 45
  },
  programa: {
    type: String,
    default: 'Programate',
    maxlength: 45
  },
  prevStudes: {
    type: String,
    lowercase: true,
    maxlength: 45
  },
  currentJob: {
    type: String,
    lowercase: true,
    maxlength: 45
  },
  company: {
    type: String,
    lowercase: true,
    maxlength: 45
  },
  gender: {
    type: String,
    lowercase: true,
    maxlength: 45
  },
  sons: {
    type: Number
  },
  interest: {
    type: Array
  },
  numberStudents: {
    type: Number
  },
  assignedStudent: {
    type: Array
  },
  estado: {
    type: Boolean,
    default: true
  },
  passwordHash: {
    type: String,
    require: true,
    min: 8
  }
})

mentorSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

const Mentor = model('Mentor', mentorSchema)

// create user

Mentor.create({
  firstName: 'nataly',
  middleName: 'carolina',
  lastName: 'estupiñan',
  secondSurname: 'duarte',
  email: 'nataly@gmail.com',
  actualAge: 29,
  program: 'Administración de sistemas',
  prevStudes: 'Profesional',
  currentJob: 'Emprendedora',
  company: 'Frutos de temporada',
  gender: 'femenino',
  sons: 0,
  interest: 'Emprendimiento, Tecnología, Organización',
  numberStudents: '1',
  assignedStudent: 'Juan Pérez',
  passwordHash: 'NA345TA8'
})

module.exports = Mentor
