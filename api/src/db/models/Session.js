const { Schema, model } = require('mongoose')

const personSchema = new Schema({
  name: {
    first: String,
    last: String
  }
});

// compile our model
const Person = model('Person', personSchema);

// create a document
Person.create({
  name: { first: 'Axl', last: 'Rose' }
});

module.exports = Person;