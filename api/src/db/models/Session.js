const { Schema, model } = require('mongoose')

const sessionSchema = new Schema({
  numSession: {
    type: Number
  },
  sessionObjective: {
    type: String,
    lowercase: true,
    maxlenght: 45
  },
  program: {
    type: String,
    default: 'Programate',
    maxlength: 45
  },
  cohort: {
    type: Number
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  state: {
    type: Boolean,
    default: true
  },
  availability: {
    fecha1: {
      type: Date
    },
    fecha2: {
      type: Date
    },
    fecha3: {
      type: Date
    }
  }
})

sessionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Session = model('Session', sessionSchema)


module.exports = Session