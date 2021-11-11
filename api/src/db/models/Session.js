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
  file: {
    type: String
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

// create a document
// Session.create({
//   numSession: 1,
//   sessionObjective: 'Programación Web',
//   cohort: 3,
//   startDate: '1948-09-20T00:00:00.000+00:00',
//   endDate: '1948-09-20T00:00:00.000+00:00',
//   file: 'Link para capsula ganadora',
//   availability: {
//     fecha1: '1948-09-20T00:00:00.000+00:00',
//     fecha2: '1948-09-20T00:00:00.000+00:00',
//     fecha3: '1948-09-20T00:00:00.000+00:00'
//   }
// })

module.exports = Session
