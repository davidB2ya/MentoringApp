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
  },
  /*  winning_capsule: {
     
   }, */
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

module.exports = Capsules
