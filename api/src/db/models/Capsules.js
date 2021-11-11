const { Schema, model } = require('mongoose')
const Session = require('../models/Session')

const capsuleSchema = new Schema({
  idSession: {
    type: Schema.ObjectId,
    ref: Session
  },
  theme_1: {
    type: Number
  },
  theme_2: {
    type: Number
  },
  theme_3: {
    type: Number
  },
  WinCapsule: {
    type: String
  }
})

capsuleSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// compile our model
const Capsules = model('Capsules', capsuleSchema)

// create a document
// Capsules.create({
//   idSession: '618c50083adc233c425bc0be',
//   theme_1: 0,
//   theme_2: 0,
//   theme_3: 0,
//   WinCapsule: 'Trabajo en Equipo'
// })

module.exports = Capsules
