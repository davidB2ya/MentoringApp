const { Schema, model } = require('mongoose')

const capsuleSchema = new Schema({
  cohort: {
    type: Number
  },
  theme_1: {
    type: Number
  },
  theme_2: {
    type: Number
  },
  theme_3: {
    type: Number
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
Capsules.create({
  cohort: 1,
  theme_1: 0,
  theme_2: 0,
  theme_3: 0
})

module.exports = Capsules
